import { useAuth } from "@/pages/authentication/authContext";
import { useUserData } from "@/pages/contexts/userDataContext";
import moment from "moment";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const CreatePost: React.FC = () => {
  const { theme } = useTheme();
  const { userData } = useUserData();
  const { currUserData } = useUserData();
  const [increaseArea, setIncreaseArea] = useState<boolean>(false);
  const [uploadingPost, setUploadingPost] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");

  console.log(userData);

  const handleIncreaseInputBox = () => {
    setIncreaseArea(true);
  };

  const handleDecreaseInputBox = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIncreaseArea(false);
  };

  const handleSendPost = async () => {
    setUploadingPost(true);
    try {
      const response = await fetch("http://localhost:8080/api/userpostdatas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profile: currUserData?.profile,
          postBody: {
            title: postTitle,
            content: postContent,
          },
          postInsights: { like: 0, dislike: 0, share: 0 },
          postComments: [],
          postAbout: {
            postDate: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
          },
        }),
      });

      if (response.ok) {
        console.log("Post created successfully");
        setPostContent("");
        setIncreaseArea(false);
      } else {
        console.error("Error creating post:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
    setUploadingPost(false);
  };

  return (
    <div className="">
      <div className="border rounded-lg h-fit p-5 ">
        <form>
          <div className="flex gap-3">
            <div
              className="h-10 w-10 rounded-full overflow-hidden border flex"
              id="current-user-profile"
            >
              <Image
                src={
                  currUserData?.profile?.image
                    ? currUserData?.profile?.image
                    : "https://i.ibb.co/cXcV0Ls/person-dummy-e1553259379744.jpg"
                }
                alt=""
                height={1000}
                width={1000}
                layout="fixed"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-grow flex-col gap-2">
              {increaseArea ? (
                <>
                  <input
                    type="text"
                    placeholder="write a title ..."
                    className={`border ${
                      theme === "dark" ? "text-white" : "text-black"
                    } text-sm w-full px-5 py-2 outline-gray-300 rounded-md`}
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                  <textarea
                    name="post"
                    id="newPost"
                    cols={2}
                    rows={5}
                    className={`border ${
                      theme === "dark" ? "text-white" : "text-black"
                    } text-sm text-start w-full p-5 outline-gray-300 rounded-md`}
                    placeholder="write something ..."
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  ></textarea>
                </>
              ) : (
                <input
                  type="text"
                  placeholder="write something ..."
                  className={`border w-full px-5 py-2 outline-gray-300 rounded-md`}
                  onClick={handleIncreaseInputBox}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
              )}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSendPost}
                  className="border h-8 w-8 rounded-md flex justify-center items-center text-lg text-cyan-500"
                >
                  <RiSendPlaneFill />
                </button>
                <button
                  className="border h-8 w-8 rounded-md flex justify-center items-center text-lg text-red-500"
                  onClick={(e) => handleDecreaseInputBox(e)}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {uploadingPost && (
        <div className="w-full rounded-lg px-5 py-2 overflow-hidden border mt-2">
          uploading post ...
        </div>
      )}
    </div>
  );
};

export default CreatePost;
