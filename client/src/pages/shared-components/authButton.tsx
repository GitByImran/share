import React from "react";
import { useAuth } from "../authentication/authContext";
import Link from "next/link";
import { useTheme } from "next-themes";

const AuthButton = () => {
  const { user, logout } = useAuth();
  const { theme } = useTheme();

  const handleUserLogOut = () => {
    logout();
  };

  // Render a Link to the login page when user is not logged in
  if (!user) {
    return (
      <Link
        href="/authentication/login"
        className={`h-10 rounded-md overflow-hidden border justify-center items-center ${
          theme === "dark" ? "text-black  bg-white" : "text-white"
        }`}
      >
        <span className="text-xl capitalize font-semibold px-3">Login</span>
      </Link>
    );
  }

  // Render a button for logout when user is logged in
  return (
    <button
      className={`h-10 text-xl capitalize font-semibold px-3 rounded-md overflow-hidden border justify-center items-center ${
        theme === "dark" ? "text-black bg-white" : "text-black"
      }`}
      onClick={handleUserLogOut}
    >
      Logout
    </button>
  );
};

export default AuthButton;
