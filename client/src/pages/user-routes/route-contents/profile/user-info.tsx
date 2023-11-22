import React from "react";
import { SlGlobe } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImConnection } from "react-icons/im";
import Link from "next/link";

const UserInfo: React.FC = () => {
  return (
    <section>
      <div className="left-part flex justify-between p-5 border rounded-xl shadow text-gray-700">
        <div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="w-fit text-xl rotate-45">
                <ImConnection />
              </p>
              <p className="text-">Followed by 65 people</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Link href="" className="flex items-center gap-2">
                <span className="text-xl">
                  <FaLinkedin />
                </span>
                <span className="text-cyan-700 font-semibold hover:underline">
                  in/stiphensmith
                </span>
              </Link>
              <Link href="" className="flex items-center gap-2">
                <span className="text-xl">
                  <FaTwitterSquare />
                </span>
                <span className="text-cyan-700 font-semibold hover:underline">
                  x/stiphensmith
                </span>
              </Link>
              <Link href="" className="flex items-center gap-2">
                <span className="text-xl">
                  <FaFacebookSquare />
                </span>
                <span className="text-cyan-700 font-semibold hover:underline">
                  fb/stiphensmith
                </span>
              </Link>
              <Link href="" className="flex items-center gap-2">
                <span className="text-xl">
                  <SlGlobe />
                </span>
                <span className="text-cyan-700 font-semibold hover:underline">
                  stiphensmith.info
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
