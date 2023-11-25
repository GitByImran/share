import React from "react";
import { SlGlobe } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImConnection } from "react-icons/im";
import Link from "next/link";
import { useUserData } from "@/pages/contexts/userDataContext";

const UserInfo: React.FC = () => {
  const { currUserData } = useUserData();
  return (
    <section>
      <div className="left-part flex justify-between p-5 border rounded-xl shadow text-gray-700">
        <div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="w-fit text-xl rotate-45">
                <ImConnection />
              </p>
              <p className="text-">Followed by 0 people</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Link href="" className="flex items-center gap-2">
                <span className="text-xl">
                  <FaLinkedin />
                </span>
                <span className="text-cyan-700 font-semibold hover:underline">
                  {currUserData?.socialLinks?.linkedin
                    ? (currUserData?.socialLinks?.linkedin).split("/")[4]
                    : "Not found"}
                </span>
              </Link>
              <Link href="" className="flex items-center gap-2">
                <span className="text-xl">
                  <FaTwitterSquare />
                </span>
                <span className="text-cyan-700 font-semibold hover:underline">
                  {currUserData?.socialLinks?.twitter
                    ? (currUserData?.socialLinks?.twitter).split("/")[3]
                    : "Not found"}
                </span>
              </Link>
              <Link href="" className="flex items-center gap-2">
                <span className="text-xl">
                  <FaFacebookSquare />
                </span>
                <span className="text-cyan-700 font-semibold hover:underline">
                  {currUserData?.socialLinks?.facebook
                    ? (currUserData?.socialLinks?.facebook).split("/")[3]
                    : "Not found"}
                </span>
              </Link>
              <Link href="" className="flex items-center gap-2">
                <span className="text-xl">
                  <SlGlobe />
                </span>
                <span className="text-cyan-700 font-semibold hover:underline">
                  {currUserData?.socialLinks?.website
                    ? currUserData?.socialLinks?.website.split("/")[2]
                    : "Not found"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
