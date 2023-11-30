import Link from "next/link";
import React from "react";
import { FaDiscord, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const MediaMenus: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-end flex-wrap gap-2">
        <Link
          href=""
          className="h-10 w-10 rounded-md overflow-hidden border bg-white hover:bg-gray-100 flex justify-center items-center"
        >
          <span className="text-xl" style={{ color: "#0077B5" }}>
            <FaLinkedinIn />
          </span>
        </Link>
        <Link
          href=""
          className="h-10 w-10 rounded-md overflow-hidden border bg-white hover:bg-gray-100 flex justify-center items-center"
        >
          <span className="text-xl" style={{ color: "#5661EA" }}>
            <FaDiscord />
          </span>
        </Link>
        <Link
          href=""
          className="h-10 w-10 rounded-md overflow-hidden border bg-white hover:bg-gray-100 flex justify-center items-center"
        >
          <span className="text-xl" style={{ color: "#30A4DA" }}>
            <FaTelegramPlane />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MediaMenus;
