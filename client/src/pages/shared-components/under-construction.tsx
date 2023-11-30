import { useRouter } from "next/router";
import React from "react";
import { IoConstruct } from "react-icons/io5";

const UnderConstruction = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="h-48 w-full flex flex-col justify-center items-center">
      <span className="text-5xl">
        <IoConstruct />
      </span>
      <span className="text-lg font-semibold">
        This Page is in under construction
      </span>
      <button className="font-semibold underline" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default UnderConstruction;
