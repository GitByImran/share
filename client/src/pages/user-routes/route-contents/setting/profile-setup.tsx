import { FiUpload } from "react-icons/fi";
import { useAuth } from "@/pages/authentication/authContext";
import Image from "next/image";
import React, { useState } from "react";
import { useUserData } from "@/pages/contexts/userDataContext";
import Swal from "sweetalert2";

const ProfileSetup: React.FC = () => {
  const { user, uploadImage } = useAuth();
  const { currUserData, refetch, updateUserData } = useUserData();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [imageUploading, setImageUploading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    workplace: "",
    address: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    website: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setIsDragging(false);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
    setIsDragging(false);
  };

  const handleUploadImage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      setImageUploading(true);

      if (selectedFile) {
        const imageUrl = await uploadImage(
          selectedFile,
          user?._id || "",
          currUserData?._id || ""
        );

        console.log("Image uploaded successfully:", imageUrl);
        setSelectedFile(null);

        refetch();
      } else {
        console.error("No file selected for upload");
      }
      setImageUploading(false);
    } catch (error: any) {
      console.error("Image upload failed:", error.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("Saving changes...");

      const updatedProfileData = {
        ...currUserData?.profile,
        name: formData.name || currUserData?.profile.name,
        email: currUserData?.profile.email,
        image: currUserData?.profile.image,
        profession: formData.profession || currUserData?.profile.profession,
        workplace: formData.workplace || currUserData?.profile.workplace,
        address: formData.address || currUserData?.profile.address,
      };
      const updatedSocialData = {
        ...currUserData?.socialLinks,
        linkedin: formData.linkedin || currUserData?.socialLinks.linkedin,
        twitter: formData.twitter || currUserData?.socialLinks.twitter,
        facebook: formData.facebook || currUserData?.socialLinks.facebook,
        website: formData.website || currUserData?.socialLinks.website,
      };

      const updatedData = {
        profile: updatedProfileData,
        socialLinks: updatedSocialData,
      };

      console.log("Update fields:", updatedData);

      await updateUserData(updatedData);

      refetch();

      console.log("Changes saved successfully!");
      setFormData({
        name: "",
        profession: "",
        workplace: "",
        address: "",
        linkedin: "",
        twitter: "",
        facebook: "",
        website: "",
      });
    } catch (error: any) {
      console.error("Failed to save changes:", error.message);
    }
  };

  const handleDiscardChanges = () => {
    Swal.fire({
      title: "If you click on Discard Changes, the form will be clear.",
      showCancelButton: true,
      confirmButtonText: "Discard Changes",
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData({
          name: "",
          profession: "",
          workplace: "",
          address: "",
          linkedin: "",
          twitter: "",
          facebook: "",
          website: "",
        });
      } else if (result.isDenied) {
        return;
      }
    });
  };

  return (
    <div className="custom-width py-10 text-gray-700">
      <form onSubmit={handleSaveChanges}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
          <div
            className={`profile border p-5 rounded-lg shadow flex flex-col gap-2 items-center ${
              isDragging ? "border-blue-500" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <h2 className="font-semibold mb-5">Profile information</h2>
            {user ? (
              <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src={`${currUserData ? currUserData?.profile.image : ""}`}
                  alt=""
                  height={300}
                  width={300}
                  className="h-32 w-32 rounded-full bg-gray-200"
                />
              </div>
            ) : (
              <div className="h-32 w-32 rounded-full bg-gray-200"></div>
            )}
            <label
              htmlFor="fileInput"
              className=" h-32 w-full flex items-center justify-center text-center cursor-pointer text-gray-700 border border-dashed border-gray-500 py-1 px-3 rounded-md break-words"
            >
              {selectedFile ? (
                `Selected file: ${selectedFile.name}`
              ) : (
                <>
                  Select an image or Drug-&-drops here <FiUpload />
                </>
              )}
              <input
                id="fileInput"
                type="file"
                accept=".jpg, .jpeg, .png"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {selectedFile && (
              <button
                onClick={handleUploadImage}
                className="px-5 py-2 rounded-md bg-cyan-700 hover:bg-cyan-900 duration-150 text-white rounded-m"
              >
                Upload image {imageUploading && "uploading..."}
              </button>
            )}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="capitalize border text-black outline-cyan-700 px-3 py-1 w-full"
              placeholder={`${
                currUserData?.profile?.name
                  ? currUserData?.profile?.name
                  : "Set name"
              }`}
            />
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
              className="capitalize border text-black outline-cyan-700 px-3 py-1 w-full"
              placeholder={`${
                currUserData?.profile?.profession
                  ? currUserData?.profile?.profession
                  : "Set profession"
              }`}
            />
          </div>
          <div className="basic-information border p-5 rounded-lg shadow flex flex-col gap-2 items-start">
            <h2 className="font-semibold mb-5">Personal information</h2>
            <input
              type="text"
              name="workplace"
              value={formData.workplace}
              onChange={handleInputChange}
              className="capitalize border text-black outline-cyan-700 px-3 py-1 w-full"
              placeholder={`${
                currUserData?.profile?.workplace
                  ? currUserData?.profile?.workplace
                  : "Set workplace"
              }`}
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="capitalize border text-black outline-cyan-700 px-3 py-1 w-full"
              placeholder={`${
                currUserData?.profile?.address
                  ? currUserData?.profile?.address
                  : "Set address"
              }`}
            />
          </div>
          <div className="social-connectivity border p-5 rounded-lg shadow flex flex-col gap-2 items-start">
            <h2 className="font-semibold mb-5">Social links</h2>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              className="border text-black outline-cyan-700 px-3 py-1 w-full"
              placeholder={`${
                currUserData?.socialLinks?.linkedin
                  ? currUserData?.socialLinks?.linkedin
                  : "Set LinkedIn profile link"
              }`}
            />
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleInputChange}
              className="border text-black outline-cyan-700 px-3 py-1 w-full"
              placeholder={`${
                currUserData?.socialLinks?.twitter
                  ? currUserData?.socialLinks?.twitter
                  : "Set Twitter profile link"
              }`}
            />
            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleInputChange}
              className="border text-black outline-cyan-700 px-3 py-1 w-full"
              placeholder={`${
                currUserData?.socialLinks?.facebook
                  ? currUserData?.socialLinks?.facebook
                  : "Set facebook profile link"
              }`}
            />
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="border text-black outline-cyan-700 px-3 py-1 w-full"
              placeholder={`${
                currUserData?.socialLinks?.website
                  ? currUserData?.socialLinks?.website
                  : "Set Personal website link"
              }`}
            />
          </div>
        </div>
        <div className="px-5 flex gap-2 py-10">
          <button
            type="button"
            onClick={handleDiscardChanges}
            className="px-5 py-2 bg-red-700 hover:bg-red-900 duration-150 text-white rounded-md"
          >
            Discard
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-cyan-700 hover:bg-cyan-900 duration-150 text-white rounded-md"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetup;
