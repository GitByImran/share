import { Request, Response } from "express";
import UserPostDataModel from "../models/userPostData";

export const addNewPost = async (req: Request, res: Response) => {
  try {
    const postData = req.body;
    const newPostData = await UserPostDataModel.create(postData);
    res.status(201).json(newPostData);
  } catch (error) {
    console.error("Error adding user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllPost = async (req: Request, res: Response) => {
  try {
    const result = await UserPostDataModel.find();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
