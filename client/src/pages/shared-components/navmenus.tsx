import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrGroup } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import Notification from "../user-routes/notification";
import { useTheme } from "next-themes";

const navmenus = [
  {
    icon: <BiHomeAlt />,
    label: "user-home",
    goto: "/components/user-home",
  },
  { icon: <CgProfile />, label: "profile", goto: "/user-routes/profile" },
  { icon: <GrGroup />, label: "group", goto: "/user-routes/group" },
  {
    icon: <IoSettingsOutline />,
    label: "setting",
    goto: "/user-routes/setting",
  },
];

const NavMenus: React.FC = ({}) => {
  const { theme } = useTheme();
  const [showNotificationModal, setShowNotificationModal] =
    useState<boolean>(false);

  const handleNotificationModal = (e: any) => {
    e.preventDefault();
    setShowNotificationModal(!showNotificationModal);
  };

  const router = useRouter();

  return (
    <div>
      <div className="">
        <div className="flex flex-row items-center gap-2 md:gap-10 py-5 md:py-0">
          {navmenus.map((menu, index) => (
            <Link
              href={menu.goto}
              key={index}
              className={`flex items-start gap-3 w-full md:hover:bg-transparent hover:text-blue-700 font-semibold ${
                router.pathname === menu.goto ? "text-blue-700" : ""
              }`}
            >
              <div className="px-3 py-2 md:p-0 w-full flex gap-2">
                <span className="text-2xl">{menu.icon}</span>
                <span className="md:hidden flex capitalize">{menu.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {showNotificationModal && (
        <div className="modal absolute top-14 w-full">
          <Notification />
        </div>
      )}
    </div>
  );
};

export default NavMenus;

/* 

<div className="relative">
      <div className="flex items-start gap-2 md:gap-10 py-5 flex-col md:items-center md:flex-row md:py-0">
        {navmenus.map((menu, index) => (
          <Link
            href={menu.goto}
            key={index}
            className={`flex items-start gap-3 w-full md:hover:bg-transparent hover:text-blue-700 font-semibold ${
              router.pathname === menu.goto ? "text-blue-400" : ""
            }`}
          >
            {menu.label.toLowerCase() === "notification" ? (
              <div className="md:flex gap-2 hidden">
                <button
                  className={`text-2xl mt-0 relative ${
                    showNotificationModal && "text-blue-400"
                  }`}
                  onClick={(e) => handleNotificationModal(e)}
                >
                  {menu.icon}
                  <span className="absolute z-50 bottom-3 right-4 md:left-4 bg-red-500 h-6 w-6 rounded-full text-sm flex items-center justify-center">
                    0
                  </span>
                </button>
                <button className="md:hidden flex capitalize">
                  {menu.label}
                </button>
              </div>
            ) : (
              <div className="px-3 py-2 md:p-0 w-full flex gap-2">
                <span className="text-2xl">{menu.icon}</span>
                <span className="md:hidden flex capitalize">{menu.label}</span>
              </div>
            )}
          </Link>
        ))}

        {showNotificationModal && (
          <div className="modal absolute top-14 w-full">
            <Notification />
          </div>
        )}

        <div className="sm:hidden block">
          <AuthButton />
        </div>
        <div className="md:hidden block">
          <Search />
        </div>
      </div>
    </div>

*/
