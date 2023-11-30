import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ListX, Menu } from "lucide-react";
import { GrGroup } from "react-icons/gr";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useTheme } from "next-themes";
import { useAuth } from "../authentication/authContext";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  // { icon: <IoMdNotifications />, label: "notification", goto: "" },
];

const ResponsiveNavmenus: React.FC = () => {
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  const router = useRouter();

  const [showHandleMenu, setShowHandleMenu] = useState<boolean>(true);

  const handleShowNavmenu = () => {
    setShowHandleMenu(!showHandleMenu);
  };

  const handleUserLogOut = () => {
    logout();
  };

  const handleUserLogIn = () => {
    router.push("/authentication/login");
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant="outline"
            className={`${
              theme === "dark" ? "bg-white text-black" : ""
            } h-10 w-10 rounded-md overflow-hidden flex justify-center items-center transition-all duration-300`}
            onClick={handleShowNavmenu}
          >
            <span className="text-xl rotate-180">
              {showHandleMenu ? <Menu /> : <ListX />}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="block md:hidden">
          {navmenus.map((menu, index) => (
            <Link
              href={menu.goto}
              key={index}
              className={`${
                router.pathname === menu.goto ? "text-blue-700" : ""
              }`}
            >
              <DropdownMenuItem className="cursor-pointer flex gap-3 items-center text-lg hover:bg-gray-50">
                <span className="text-xl">{menu.icon}</span>
                <span className="capitalize font-semibold">{menu.label}</span>
              </DropdownMenuItem>
            </Link>
          ))}
          <DropdownMenuItem className="">
            {user ? (
              <Button onClick={handleUserLogOut} className="w-full flex gap-1">
                <span className="text-lg">
                  <IoLogOutOutline />
                </span>
                <span>Log Out</span>
              </Button>
            ) : (
              <Button onClick={handleUserLogIn} className="w-full flex gap-1">
                <span className="text-lg">
                  <IoLogInOutline />
                </span>
                <span>Log In</span>
              </Button>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ResponsiveNavmenus;
