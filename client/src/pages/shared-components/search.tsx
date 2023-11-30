import React from "react";
import { CgSearch } from "react-icons/cg";

const Search = () => {
  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <div className="border flex overflow-hidden rounded-md">
          <input
            type="text"
            placeholder="search something ..."
            className={`border-none outline-none w-full px-5 py-2`}
          />
          <button className="search px-2 text-xl ">
            <CgSearch />
          </button>
        </div>
        {/*  <div className="border md:bg-transparent bg-white py-2 px-5 mt-2 rounded-md overflow-hidden flex flex-col gap-2">
          <Link href="" className="truncate md:w-full w-48">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Search;
