import { Request, Response } from "express";
import UserDataModel from "../models/userData";

export const addUserData = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUserData = await UserDataModel.create(userData);
    res.status(201).json(newUserData);
  } catch (error) {
    console.error("Error adding user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserData = async (req: Request, res: Response) => {
  try {
    const result = await UserDataModel.find();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUserData = async (req: Request, res: Response) => {
  const userDataId = req.params.userDataId; // User Data's ID in the 'userdatas' endpoint
  const updateFields = req.body; // Fields to update

  try {
    // Find the existing user data
    const existingUserData = await UserDataModel.findOne({ _id: userDataId });

    if (!existingUserData) {
      return res.status(404).json({ error: "User data not found" });
    }

    // Log the existing user data and update fields
    console.log("Existing User Data:", existingUserData);
    console.log("Update Fields Received:", updateFields);

    // Update only the specified fields
    for (const field in updateFields) {
      if (Object.prototype.hasOwnProperty.call(updateFields, field)) {
        // Check if the field is nested under the 'profile' property
        if (field.startsWith("profile.")) {
          // If nested under 'profile', update the nested structure
          const nestedField = field.replace("profile.", "");
          if (nestedField.startsWith("socialLinks.")) {
            // If nested under 'socialLinks', update the nested structure
            const socialLinkField = nestedField.replace("socialLinks.", "");
            existingUserData.profile.socialLinks[socialLinkField] =
              updateFields[field];
          } else {
            // If not nested under 'socialLinks', update the nested structure under 'profile'
            existingUserData.profile[nestedField] = updateFields[field];
          }
        } else {
          // If not nested, update directly
          existingUserData[field] = updateFields[field];
        }
      }
    }

    // Log the updated user data
    console.log("Updated User Data:", existingUserData);

    // Save the updated user data
    await existingUserData.save();

    // Log a success message
    console.log("User data updated successfully");

    res.status(200).json({ message: "User data updated successfully" });
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
