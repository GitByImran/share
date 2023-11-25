import { FaTimes } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { HiOutlineClipboard } from "react-icons/hi";
import { MdOutlineReportProblem } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgSearch } from "react-icons/cg";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiCalendarCheck } from "react-icons/bi";
import { CgEye } from "react-icons/cg";
import { RiShareBoxFill } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";
import Search from "@/pages/shared-components/search";
import Link from "next/link";
import { useAuth } from "../authentication/authContext";
import { useUserData } from "../contexts/userDataContext";

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

const UserHomePage = () => {
  const { user } = useAuth();
  const { currUserData } = useUserData();
  const [increaseArea, setIncreaseArea] = useState<boolean>(false);
  const [showMoreForPost, setShowMoreForPost] = useState<number | null>(null);

  const handleIncreaseInputBox = () => {
    setIncreaseArea(true);
  };

  const handleDecreaseInputBox = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIncreaseArea(false);
  };

  const handleShowMoreActions = (postId: number) => {
    setShowMoreForPost((prev) => (prev === postId ? null : postId));
  };

  console.log(user);

  return (
    <div className="py-10">
      <div className="custom-width px-5">
        <main className="grid grid-cols-12 gap-5 text-gray-700">
          <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
            <div className="border rounded-lg h-fit p-5 ">
              <form>
                <div className="flex gap-3">
                  <div
                    className="h-10 w-10 rounded-full overflow-hidden border"
                    id="current-user-profile"
                  >
                    <Image
                      src={
                        currUserData?.profile?.image
                          ? currUserData?.profile?.image
                          : "/images.png"
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
                      <textarea
                        name="post"
                        id="newPost"
                        cols={2}
                        rows={5}
                        className="border w-full p-5 outline-gray-300 rounded-md"
                        placeholder="write something ..."
                      ></textarea>
                    ) : (
                      <input
                        type="text"
                        placeholder="write something ..."
                        className={`border w-full px-5 py-2 outline-gray-300 rounded-md`}
                        onClick={handleIncreaseInputBox}
                      />
                    )}
                    <div className="flex items-center gap-2">
                      <button className="border h-8 w-8 rounded-md flex justify-center items-center text-lg text-cyan-500">
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
            <div className="border rounded-lg h-fit p-5 hidden md:block">
              <Search />
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 flex flex-col gap-5 overflow-hidden">
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
                  <div className="relative">
                    <button
                      className={`w-8 h-8 flex justify-center items-center rounded-full overflow-hidden ${
                        showMoreForPost === data.id &&
                        "border bg-gray-700 text-white"
                      }`}
                      onClick={() => handleShowMoreActions(data.id)}
                    >
                      {showMoreForPost === data.id ? (
                        <FaTimes />
                      ) : (
                        <HiDotsHorizontal />
                      )}
                    </button>
                    {showMoreForPost === data.id && (
                      <div className="absolute right-0 mt-5 bg-white shadow-lg rounded-md overflow-hidden border px-5 py-2">
                        <div className="flex flex-col gap-2">
                          <Link
                            href=""
                            className="truncate font-semibold flex items-center gap-2"
                          >
                            <span>
                              <RiProfileLine />
                            </span>
                            <span>Similiar Post</span>
                          </Link>
                          <Link
                            href=""
                            className="truncate font-semibold flex items-center gap-2"
                          >
                            <span>
                              <MdOutlineReportProblem />
                            </span>
                            <span>Report Post</span>
                          </Link>

                          <button className="truncate font-semibold flex items-center gap-2">
                            <span>
                              <HiOutlineClipboard />
                            </span>
                            <span>Copy Link</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="py-5">
                  <p>{data.postBody}</p>
                </div>
                <div
                  id="post-brief"
                  className="flex items-center justify-between p-2"
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
                <div className="expressions border-t flex items-center justify-between p-2">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <button className="text-lg">
                        <AiOutlineLike />
                        {/* <AiFillLike /> */}
                      </button>
                      <span>200</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="text-lg"
                        style={{ transform: "scaleX(-1)" }}
                      >
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
        </main>
      </div>
    </div>
  );
};

export default UserHomePage;
