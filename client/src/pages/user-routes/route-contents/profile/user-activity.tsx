import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrSort } from "react-icons/gr";
import React, { useEffect, useState } from "react";
import { HiClock, HiOutlineClipboard } from "react-icons/hi2";
import { useUserData } from "@/pages/contexts/userDataContext";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareBoxFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { useAuth } from "@/pages/authentication/authContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, SlidersHorizontal } from "lucide-react";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";

const UserActivity: React.FC = () => {
  const { user } = useAuth();
  const { currUserData, allPosts } = useUserData();
  const [currentUserPosts, setCurrentUserPosts] = useState<any[]>([]);
  const [expandedPostIndex, setExpandedPostIndex] = useState<number | null>(
    null
  );
  const [showMoreForPost, setShowMoreForPost] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [showFilterOption, setShowFilterOption] = useState<boolean>(false);

  const handleSeeMore = (index: number) => {
    setExpandedPostIndex(index === expandedPostIndex ? null : index);
  };

  const handleShowMoreActions = (postId: number) => {
    setShowMoreForPost((prev) => (prev === postId ? null : postId));
  };

  const handleShowFilterOptions = () => {
    setShowFilterOption(!showFilterOption);
  };

  useEffect(() => {
    const filteredPosts = allPosts?.filter(
      (post: any) => post.profile.email === currUserData?.profile?.email
    );

    setCurrentUserPosts(filteredPosts);
  }, [user, currUserData, allPosts]);

  const filterPosts = (posts: any[], filter: string | null) => {
    try {
      const parsedPosts = posts?.map((post) => ({
        ...post,
        postAbout: {
          ...post.postAbout,
          postDate: moment(
            post.postAbout.postDate,
            "dddd, MMMM Do YYYY, h:mm:ss a"
          ).toDate(),
        },
      }));

      let sortedPosts;
      switch (filter) {
        case "recent":
          sortedPosts = parsedPosts?.sort(
            (a, b) => b.postAbout.postDate - a.postAbout.postDate
          );
          break;
        case "This month":
          const lastMonth = moment().subtract(1, "month").toDate();
          sortedPosts = parsedPosts?.filter(
            (post) => post.postAbout.postDate >= lastMonth
          );
          break;
        case "This year":
          const lastYear = moment().subtract(1, "year").toDate();
          sortedPosts = parsedPosts.filter(
            (post) => post.postAbout.postDate >= lastYear
          );
          break;
        case "1 year ago":
          const oneYearAgo = moment().subtract(1, "year").toDate();
          const twoYearsAgo = moment().subtract(2, "years").toDate();
          sortedPosts = parsedPosts.filter(
            (post) =>
              post.postAbout.postDate >= twoYearsAgo &&
              post.postAbout.postDate < oneYearAgo
          );
          break;
        default:
          sortedPosts = parsedPosts;
      }

      return sortedPosts;
    } catch (error) {
      return null;
    }
  };

  const filteredPosts = filterPosts(currentUserPosts, selectedFilter);
  console.log(showMoreForPost);

  return (
    <section>
      <div className="right-top-part flex flex-col gap-5">
        <div className="p-5 border rounded-xl shadow ">
          <div className="flex items-center justify-between">
            <p className="capitalize text-xl font-semibold">
              {currUserData?.profile?.name
                ? currUserData?.profile?.name + "'s"
                : "User"}{" "}
              Activities
            </p>
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex gap-2 items-center text-lg"
                  >
                    <SlidersHorizontal size={15} className="mt-1" />
                    {selectedFilter ? selectedFilter : "Filter"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => setSelectedFilter(null)}>
                      Most Recent
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSelectedFilter("This month")}
                    >
                      This month
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSelectedFilter("This year")}
                    >
                      This year
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSelectedFilter("1 year ago")}
                    >
                      1 year ago
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div className="right-down-part flex flex-col justify-between ">
          <div className="grid grid-cols-12 gap-5">
            {filteredPosts?.map((post: any, index: any) => (
              <div
                key={index}
                className="col-span-12 border p-5 rounded-lg overflow-hidden shadow flex flex-col items-start gap-2"
              >
                <div className="w-full flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3" id="profile">
                    <Image
                      src={`${
                        currUserData?.profile?.image
                          ? currUserData.profile.image
                          : "/images.jpg"
                      }`}
                      alt=""
                      height={1000}
                      width={1000}
                      className="h-12 w-12 border rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">
                        {currUserData?.profile?.name}
                      </h2>
                      <p className="text-md">
                        {currUserData?.profile?.profession}
                      </p>
                    </div>
                  </div>
                  {/* create action */}
                  <div className="">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          onClick={() => handleShowMoreActions(post._id)}
                          className="text-2xl"
                        >
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>

                      {showMoreForPost === post._id && (
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
                {/*  */}
                <p className="my-5">
                  {expandedPostIndex === index
                    ? post?.postBody?.content
                    : post?.postBody?.content.slice(0, 300)}
                  {post?.postBody?.content.length > 300 && (
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => handleSeeMore(index)}
                    >
                      {expandedPostIndex === index ? "see less" : "...see more"}
                    </span>
                  )}
                </p>

                <p className="text-md flex items-center gap-1">
                  <span className="">
                    <HiClock />
                  </span>
                  {post?.postAbout?.postDate
                    ? moment(post?.postAbout?.postDate).format("LLLL")
                    : "Uploaded on -"}
                </p>

                <div className="expressions w-full border-t flex items-center justify-between p-2">
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
        </div>
      </div>
    </section>
  );
};

export default UserActivity;
