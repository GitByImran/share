import React from "react";
import UserProfile from "./route-contents/profile/user-profile";
import UserInfo from "./route-contents/profile/user-info";
import UserActivity from "./route-contents/profile/user-activity";

const Profile: React.FC = () => {
  return (
    <div className="py-10">
      <div className="custom-width px-5 flex flex-col gap-5">
        <UserProfile />
        <div className="grid grid-cols-12 gap-5 ">
          <div className="col-span-12 md:col-span-4">
            <UserInfo />
          </div>
          <div className="col-span-12 md:col-span-8">
            <UserActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
