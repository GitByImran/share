import { HiClock } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import React from "react";
import { useAuth } from "@/pages/authentication/authContext";
import { useUserData } from "@/pages/contexts/userDataContext";

const UserProfile: React.FC = () => {
  const { user } = useAuth();
  const { currUserData } = useUserData();
  console.log(currUserData);
  return (
    <section>
      <div className="top-part flex flex-wrap gap-5 justify-between items-center p-5 border rounded-xl shadow">
        <div className="flex items-center gap-5">
          {!user || !currUserData ? (
            <div className="h-24 w-24 rounded-full bg-gray-200"></div>
          ) : (
            <Image
              src={`${
                currUserData?.profile?.image
                  ? currUserData?.profile?.image
                  : "/images.png"
              }`}
              alt=""
              height={1000}
              width={1000}
              className="h-24 w-24 rounded-full object-cover border-2 border-gray-200"
            />
          )}
          <div>
            <h2 className="text-3xl font-bold capitalize">
              {currUserData?.profile?.name
                ? currUserData?.profile?.name
                : "Set Name"}
            </h2>
            <p className="text-lg font-normal capitalize">
              {currUserData?.profile?.profession
                ? currUserData?.profile?.profession
                : "Set Profession"}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2">
            <span className="text-xl">
              <HiOutlineBriefcase />
            </span>
            <span className="font-semibold">
              {currUserData?.profile?.workplace
                ? currUserData?.profile?.workplace
                : "Not found"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-xl">
              <IoLocationSharp />
            </span>
            <span className="font-semibold">
              {currUserData?.profile?.address
                ? currUserData?.profile?.address
                : "Not found"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-xl">
              <HiClock />
            </span>
            {/* todo : here date will be showed as user registered */}
            <span className="font-semibold">
              {" "}
              {user?.registered ? user?.registered : "Not found"}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
