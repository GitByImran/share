import React from "react";
import Search from "@/pages/shared-components/search";
import CreatePost from "./user-home/user-home-contents/create-post";
import ShowPosts from "./user-home/user-home-contents/show-posts";
import { useUserData } from "../contexts/userDataContext";

const UserHomePage: React.FC = () => {
  const { currUserData } = useUserData();

  return (
    <div className="py-10">
      <div className="custom-width px-5">
        <main className="grid grid-cols-12 gap-5 text-gray-700">
          <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
            <CreatePost />
          </div>
          <div className="col-span-12 md:col-span-8 overflow-hidden">
            <ShowPosts />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserHomePage;
