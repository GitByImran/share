import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import jwt, { JwtPayload } from "jsonwebtoken";
import { addUser, getAuthUser, getUser, updateUser } from "./controllers/user";
import {
  addUserData,
  getUserData,
  updateUserData,
} from "./controllers/userData";
import UserPostDataModel from "./models/userPostData";
import { addNewPost, getAllPost } from "./controllers/userPostData";

// config

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// jwt auth

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

const secret = process.env.SECRET || "";

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];

  // console.log(token);

  if (!token) {
    res.status(401).json({ message: "Unauthorized - No token provided" });
    return;
  }

  try {
    const decoded = jwt.verify(token, secret);
    (req as CustomRequest).token = decoded;
    next();
  } catch (error) {
    console.log(error);
  }
};

// usage route

const corsOptions = {
  origin: "http://localhost:3000", // replace with the actual origin of your frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(morgan("dev"));

// global routes

app.get("/api", (req: Request, res: Response) => {
  res.json("connected");
});
app.get("/api/jwt", (req: Request, res: Response) => {
  res.json(secret);
});

// ** user routes

app.post("/api/users", addUser);
app.get("/api/users", authenticateJWT, getUser);
app.post("/api/auth", getAuthUser);
app.put("/api/users/:userId", updateUser);

// ** userData routes
app.post("/api/userdatas", addUserData);
app.get("/api/userdatas", authenticateJWT, getUserData);
app.put("/api/userdatas/:userDataId", updateUserData);

// ** userPostData routes
app.post("/api/userpostdatas", addNewPost);
app.get("/api/userpostdatas", authenticateJWT, getAllPost);

// connect database

mongoose
  .connect(process.env.URI || "")
  .then(() => {
    app.listen(port, () => {
      console.log(
        `database connected and check on server http://localhost:${port}/`
      );
    });
  })
  .catch((error) => {
    throw new Error("unable to access database, double check access secrets");
  });
