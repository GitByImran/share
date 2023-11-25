import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CgGoogle } from "react-icons/cg";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "./authContext";

const Login: React.FC = () => {
  const { user, login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(formData);
      console.log("Authentication successful");
      router.push("/components/user-home");
    } catch (error: any) {
      setError("Invalid email or password");
      console.error("Authentication failed:", error.message);
    }
  };

  const handleGoogleLogin = () => {};

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="logo h-12 w-12 overflow-hidden">
          <Image
            src="/logo-main.png"
            alt="share-logo"
            height={300}
            width={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="my-10 text-center text-xl font-semibold text-gray-700">
            Log in to your account
          </h2>

          <form
            className="flex flex-col gap-3 w-full sm:w-72"
            onSubmit={handleUserLogin}
          >
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="h-10 w-full p-2 border border-gray-300 rounded"
              placeholder="enter your email"
            />
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="h-10 w-full p-2 border border-gray-300 rounded"
              placeholder="enter your password"
            />
            <button type="submit" className="bg-black text-white p-2 rounded">
              Continue
            </button>
            {error && (
              <p className="text-red-500 text-md text-center mt-2">{error}</p>
            )}
          </form>
        </div>
        <h2 className="mt-10 text-center text-xl font-semibold text-gray-700">
          or, continue with
        </h2>
        <div className="flex gap-3 items-center justify-center py-5">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="bg-red-700 text-white p-2 rounded-full border-4 hover:border-gray-300 border-white"
          >
            <span className="text-xl">
              <CgGoogle />
            </span>
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="bg-black text-white p-2 rounded-full border-4 hover:border-gray-300 border-white"
          >
            <span className="text-xl">
              <FiGithub />
            </span>
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="text-white p-2 rounded-full border-4 hover:border-gray-300 border-white"
            style={{ background: "#4867AA" }}
          >
            <span className="text-xl">
              <FaFacebookF />
            </span>
          </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link
            href="/authentication/register"
            className="underline text-cyan-700"
          >
            New here, Create an account
          </Link>
          <p>or</p>
          <Link
            href="/components/user-home"
            className="underline text-cyan-700"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
