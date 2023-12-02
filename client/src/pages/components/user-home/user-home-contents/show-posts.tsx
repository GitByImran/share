import { useAuth } from "@/pages/authentication/authContext";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCalendarCheck, BiComment } from "react-icons/bi";
import { CgEye } from "react-icons/cg";
import { HiOutlineClipboard } from "react-icons/hi2";
import { RiDeleteBinLine, RiShareBoxFill } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { FiEdit } from "react-icons/fi";
import { useUserData } from "@/pages/contexts/userDataContext";
import { useQuery } from "@tanstack/react-query";

const ShowPosts: React.FC = () => {
  const { theme } = useTheme();
  const { currUserData } = useUserData();
  const [showMoreForPost, setShowMoreForPost] = useState<number | null>(null);

  const { data: allPosts, refetch } = useQuery({
    queryKey: ["allPosts"],
    queryFn: () =>
      fetch("http://localhost:8080/api/userpostdatas", {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token") || ""}`,
        },
      }).then((res) => res.json()),
  });

  const handleShowMoreActions = (postId: number) => {
    setShowMoreForPost((prev) => (prev === postId ? null : postId));
  };

  const handleLike = async (postId: string, userId: string) => {
    try {
      const likeData = {
        id: userId,
        like: true,
      };

      const post = allPosts?.find((post: any) => post._id === postId);

      if (post) {
        const userLikeIndex = post.postLikes.findIndex(
          (like: any) => like.id === userId
        );

        if (userLikeIndex !== -1) {
          // User has already liked, change likeData to remove like
          likeData.like = false;
        }
      }

      const response = await fetch(
        `http://localhost:8080/api/userpostdatas/${postId}`,
        {
          method: "PATCH", // Explicitly set the method
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ likeData }),
        }
      );

      if (response.ok) {
        refetch();
        console.log("Post insights updated successfully");
      } else {
        console.error("Failed to update post insights:", response.status);
        console.error(await response.text());
      }
    } catch (error) {
      console.error("Error updating post insights:", error);
    }
  };

  const handleComment = async (postId: string, comment: string) => {};

  console.log(allPosts);

  return (
    <div
      className={`flex flex-col gap-5 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      {allPosts?.map((data: any, index: number) => (
        <div className="p-5 border rounded-lg" id="post" key={index}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3" id="profile">
              <Image
                src={data.profile.image || "/images.jpg"}
                alt=""
                height={300}
                width={300}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{data.profile.name}</h2>
                <p className="text-md">{data.profile.email}</p>
              </div>
            </div>
            {/*  */}
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    onClick={() => handleShowMoreActions(data._id)}
                    className={`text-2xl ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>

                {showMoreForPost === data._id && (
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link
                        href=""
                        className="truncate font-semibold flex items-center gap-2"
                      >
                        <span>
                          <FiEdit />
                        </span>
                        <span>Edit Post</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href=""
                        className="truncate font-semibold flex items-center gap-2"
                      >
                        <span>
                          <RiDeleteBinLine />
                        </span>
                        <span>Delete Post</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href=""
                        className="truncate font-semibold flex items-center gap-2"
                      >
                        <span>
                          <HiOutlineClipboard />
                        </span>
                        <span>Copy Link</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
            </div>
          </div>

          <div className={`py-5`}>
            <p>{data.content}</p>
          </div>
          <div
            id="post-brief"
            className={`flex items-center justify-between p-2 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <h2 className="flex items-center gap-2">
              <span>
                <BiCalendarCheck />
              </span>
              <span>11-17-2023</span>
            </h2>
            <h2 className="flex items-center gap-2">
              <span>
                <CgEye />
              </span>
              <span className="hidden sm:block">Seen by</span>
            </h2>
          </div>
          <div
            className={`expressions border-t flex items-center justify-between p-2`}
          >
            <div className="w-full flex justify-between  gap-5">
              <div className="flex items-center gap-2">
                <button
                  className="text-lg"
                  onClick={() => handleLike(data._id, currUserData?._id)}
                >
                  <AiOutlineLike color={data.like > 0 ? "blue" : "black"} />
                </button>
                <span>{data.like}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-lg"
                  onClick={() => handleComment(data._id, "Your Comment")}
                >
                  <BiComment />
                </button>
                <span className="hidden sm:block">Comment</span>
              </div>

              <div className="flex items-center gap-2">
                <button className="text-lg">
                  <RiShareBoxFill />
                </button>
                <span className="hidden sm:block">Share</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPosts;

{
  /* <span className="font-semibold">
                {data.totalViews >= 1000
                  ? data.totalViews / 1000 + "k"
                  : data.totalViews}
              </span> */
}
