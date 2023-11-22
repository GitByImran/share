import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoMdNotifications } from "react-icons/io";
import NavRoutes from "./navRoutes";
import MediaMenus from "./mediamenus";
import Notification from "../user-routes/notification";
import { useAuth } from "../authentication/authContext";
import AuthButton from "./authButton";

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const [showHandleMenu, setShowHandleMenu] = useState<boolean>(true);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [showNotificationModal, setShowNotificationModal] =
    useState<boolean>(false);

  const handleShowNavmenu = () => {
    setShowHandleMenu(!showHandleMenu);
  };

  const handleNotificationModal = (e: any) => {
    e.preventDefault();
    setShowNotificationModal(!showNotificationModal);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mb-20">
      <div
        className={`w-full border-b-2 fixed z-50 top-0 transition-all  ${
          scrolling ? "bg-white" : ""
        }`}
      >
        <nav className="custom-width p-5 flex items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-2">
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
          </Link>

          <NavRoutes
            setShowHandleMenu={setShowHandleMenu}
            showHandleMenu={showHandleMenu}
          />
          <div className="flex items-center justify-end flex-wrap gap-2 relative">
            <div className="flex gap-2 md:hidden">
              <Link
                href=""
                className="text-2xl mt-0 md:mt-2 relative"
                onClick={(e) => handleNotificationModal(e)}
              >
                <IoMdNotifications />
                <span className="absolute z-50 bottom-3 right-4 md:left-4 bg-red-500 text-white h-6 w-6 rounded-full text-sm flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
            <div className="hidden sm:block">
              <MediaMenus />
            </div>

            <button
              className={`h-10 w-10 rounded-md overflow-hidden bg-gray-100 md:hidden flex justify-center items-center 
            `}
              onClick={handleShowNavmenu}
            >
              <span className="text-xl">
                {showHandleMenu ? <HiOutlineBars2 /> : <FaTimes />}
              </span>
            </button>
            {showNotificationModal && (
              <div className="modal absolute top-16 md:hidden block ">
                <Notification />
              </div>
            )}
            <AuthButton />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
