import React from "react";
import { useAuth } from "../authentication/authContext";
import Link from "next/link";

const AuthButton = () => {
  const { user, logout } = useAuth();

  const handleUserLogOut = () => {
    logout();
  };

  // Render a Link to the login page when user is not logged in
  if (!user) {
    return (
      <Link
        href="/authentication/login"
        className="h-10 rounded-md overflow-hidden bg-gray-100 hover:bg-gray-200 hidden sm:flex justify-center items-center"
      >
        <span className="text-xl capitalize font-semibold px-3 text-gray-700">
          Login
        </span>
      </Link>
    );
  }

  // Render a button for logout when user is logged in
  return (
    <button
      className="h-10 text-xl capitalize font-semibold px-3 text-gray-700 rounded-md overflow-hidden bg-gray-100 hover:bg-gray-200 hidden sm:flex justify-center items-center"
      onClick={handleUserLogOut}
    >
      Logout
    </button>
  );
};

export default AuthButton;
