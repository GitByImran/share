import { HiClock } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const UserProfile = () => {
  return (
    <section>
      <div className="top-part flex flex-wrap gap-5 justify-between items-center p-5 border rounded-xl shadow text-gray-700">
        <div className="flex items-center gap-5">
          <Image
            src="/images.jpg"
            alt=""
            height={300}
            width={300}
            className="h-24 w-24 rounded-full object-cover border-2 border-gray-200"
          />
          <div>
            <h2 className="text-3xl font-bold">Stiphen Smith</h2>
            <p className="text-lg font-normal">Software Engineer</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2">
            <span className="text-xl">
              <HiOutlineBriefcase />
            </span>
            <span className="font-semibold">ABC Gorup</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-xl">
              <IoLocationSharp />
            </span>
            <span className="font-semibold">ABC Street, NY, USA</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-xl">
              <HiClock />
            </span>
            <span className="font-semibold">Member since January, 2023</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
