import express, { Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { addUser, getAuthUser, getUser } from "./controllers/user";

// config

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// usage route

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes

app.get("/api", (req: Request, res: Response) => {
  res.json("connected");
});

// ** user

app.post("/api/users", addUser);
app.get("/api/users", getUser);
app.post("/api/auth", getAuthUser);

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
