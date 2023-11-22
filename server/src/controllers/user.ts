import { Request, Response } from "express";
import UserModel from "../models/user";
import bcrypt from "bcrypt";

export const addUser = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne({ email: requestData.email });
    const hashedPassword = await bcrypt.hash(requestData.password, 10);
    if (existingUser) {
      return res.status(400).json({
        error: "Email already exists. Please use a different email address.",
      });
    }

    const newUser = await UserModel.create({
      ...requestData,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const result = await UserModel.find();
  res.status(200).json(result);
};

export const getAuthUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Authentication successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Authentication failed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
