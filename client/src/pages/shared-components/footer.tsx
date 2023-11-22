import Image from "next/image";
import Link from "next/link";
import React from "react";
import MediaMenus from "./mediamenus";

const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="custom-width px-5 py-10 flex justify-between gap-5 flex-wrap">
          <div className="flex items-center justify-between md:w-fit w-full">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 overflow-hidden">
                <Image
                  src="/logo-main.png"
                  alt="logo-main"
                  height={300}
                  width={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-2xl font-semibold">Share</span>
            </div>
            <div className="block sm:hidden">
              <MediaMenus />
            </div>
          </div>
          <div className="text-lg text-gray-500 flex items-center flex-wrap gap-5">
            <Link href="">Affiliate</Link>
            <Link href="">Terms of use</Link>
            <Link href="">Privacy</Link>
            <Link href="">Help</Link>
          </div>
        </div>
      </footer>
      <center className="bg-gray-50">
        <div className="custom-width text-lg p-5 flex flex-wrap justify-center items-center gap-2">
          Community by
          <Link href="/" className="text-cyan-700 mt-.5">
            SHARE
          </Link>
          All Right Reserved &copy; 2023
        </div>
      </center>
    </div>
  );
};

export default Footer;
