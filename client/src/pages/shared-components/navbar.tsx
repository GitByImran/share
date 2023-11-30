import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MediaMenus from "./mediamenus";
import Notification from "../user-routes/notification";
import { useAuth } from "../authentication/authContext";
import AuthButton from "./authButton";
import { useUserData } from "../contexts/userDataContext";
import { ModeToggle } from "./theme-toggler";
import { useTheme } from "next-themes";
import NavMenus from "./navmenus";
import { useRouter } from "next/router";
import ResponsiveNavmenus from "./responsive-navmenus";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  const router = useRouter();
  const { currUserData } = useUserData();
  const [showHandleMenu, setShowHandleMenu] = useState<boolean>(true);
  const [scrolling, setScrolling] = useState<boolean>(false);

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
    <div className="sticky top-0 z-50 ">
      <div
        className={`w-full shadow  transition-all ${
          theme === "dark" ? "bg-black shadow-gray-50" : "bg-white"
        }`}
      >
        <nav className="custom-width p-5 flex items-center justify-between flex-row gap-5">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-12 w-12 overflow-hidden">
              <Image
                src={
                  theme === "dark" ? "/logo-secondary.png" : "/logo-main.png"
                }
                alt="logo-main"
                height={300}
                width={300}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-2xl font-semibold">Share</span>
          </Link>

          {/*  */}
          <div className="onRegularDevice hidden md:block">
            <NavMenus />
          </div>
          {/*  */}

          <div className="flex items-center justify-end flex-wrap gap-2">
            <div>
              <Notification />
            </div>

            <div className="hidden sm:block">
              <MediaMenus />
            </div>

            <div className="hidden sm:block">
              <AuthButton />
            </div>
            <ModeToggle />

            {/* responsive nav-menu's */}
            <div className="flex md:hidden">
              <ResponsiveNavmenus />
            </div>
            {/*  */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
