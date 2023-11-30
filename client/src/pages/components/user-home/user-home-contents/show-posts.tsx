import { useAuth } from "@/pages/authentication/authContext";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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

const Posts = [
  {
    id: 1,
    image: "path/to/image1.jpg",
    name: "John Doe",
    profession: "Software Engineer",
    postBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    totalViews: 1000,
  },
  {
    id: 2,
    image: "path/to/image2.jpg",
    name: "Jane Smith",
    profession: "Graphic Designer",
    postBody:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    totalViews: 500,
  },
  {
    id: 3,
    image: "path/to/image3.jpg",
    name: "Alex Johnson",
    profession: "Marketing Specialist",
    postBody:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    totalViews: 800,
  },
  {
    id: 4,
    image: "path/to/image4.jpg",
    name: "Emily Davis",
    profession: "Content Writer",
    postBody:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    totalViews: 1200,
  },
];

const ShowPosts = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [showMoreForPost, setShowMoreForPost] = useState<number | null>(null);

  const handleShowMoreActions = (postId: number) => {
    setShowMoreForPost((prev) => (prev === postId ? null : postId));
  };

  return (
    <div
      className={`flex flex-col gap-5 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      {Posts.map((data, index) => (
        <div className="p-5 border rounded-lg" id="post" key={index}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3" id="profile">
              <Image
                src="/images.jpg"
                alt=""
                height={300}
                width={300}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{data.name}</h2>
                <p className="text-md">{data.profession}</p>
              </div>
            </div>
            {/*  */}
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    onClick={() => handleShowMoreActions(data.id)}
                    className={`text-2xl ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>

                {showMoreForPost === data.id && (
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
            <p>{data.postBody}</p>
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
              <span className="font-semibold">
                {data.totalViews >= 1000
                  ? data.totalViews / 1000 + "k"
                  : data.totalViews}
              </span>
            </h2>
          </div>
          <div
            className={`expressions border-t flex items-center justify-between p-2`}
          >
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <button className="text-lg">
                  <AiOutlineLike />
                  {/* <AiFillLike /> */}
                </button>
                <span>200</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-lg" style={{ transform: "scaleX(-1)" }}>
                  <AiOutlineDislike />
                  {/* <AiFillDislike /> */}
                </button>
                <span>200</span>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <button className="text-lg">
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
