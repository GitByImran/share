import React from "react";
import { useAuth } from "../authentication/authContext";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const AuthButton = () => {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const router = useRouter();

  const handleUserLogOut = () => {
    logout();
  };

  const handlePushLogin = () => {
    router.push("/authentication/login");
  };

  if (!user) {
    return (
      <button
        className={`h-10 text-xl capitalize font-semibold px-3 rounded-md overflow-hidden border justify-center items-center ${
          theme === "dark" ? "text-black bg-white" : "text-black"
        }`}
        onClick={handlePushLogin}
      >
        Logout
      </button>
    );
  }

  return (
    <div>
      <button
        className={`h-10 text-xl capitalize font-semibold px-3 rounded-md overflow-hidden border justify-center items-center ${
          theme === "dark" ? "text-black bg-white" : "text-black"
        }`}
        onClick={handleUserLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default AuthButton;
