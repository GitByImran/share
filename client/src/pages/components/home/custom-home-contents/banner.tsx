import { BiCheckSquare } from "react-icons/bi";
import { FaSlideshare } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <div id="banner">
      <main className="py-32 flex flex-col items-center justify-center relative">
        <div className="flex flex-col items-center gap-5 text-gray-700">
          <span className="text-7xl text-cyan-700 -rotate-45">🚀</span>
          <p className="text-5xl font-semibold md:text-center text-center text-gray-700">
            Explore, Inspire, Learn: Share Your Wisdom!
          </p>
        </div>
        <div className="text-lg my-10 bg-gray-100 p-5 rounded-lg overflow-hidden border-l-8 border-cyan-700">
          <p className="flex items-center gap-2">
            <span>
              <BiCheckSquare />
            </span>
            <span>Join a diverse community of learners and experts.</span>
          </p>
          <p className="flex items-center gap-2">
            <span>
              <BiCheckSquare />
            </span>
            <span>
              Your knowledge has the potential to inspire and transform.
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span>
              <BiCheckSquare />
            </span>
            <span>
              Discover new perspectives and stay ahead in your areas of
              interest.
            </span>
          </p>
        </div>
        <div className="mt-5">
          <Link
            href=""
            className="flex items-center gap-2 px-5 py-5 rounded-lg bg-cyan-700 hover:bg-cyan-900 duration-1000 text-lg font-semibold text-white capitalize"
          >
            join the community <FaSlideshare />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Banner;
