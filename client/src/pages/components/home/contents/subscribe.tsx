import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="pb-20 text-gray-700 flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">📧 Subscribe to our newsletter</h2>
          <p>
            Stay updated on new releases and features, guides, and case studies.
          </p>
        </div>
        <form className="border border-cyan-700  max-w-full md:w-6/12 h-16 mx-auto flex bg-cyan-700 rounded-lg overflow-hidden">
          <input
            type="text"
            className="outline-none w-full px-5 text-lg"
            placeholder="enter your email address..."
          />
          <button className="px-5 h-full text-white font-semibold text-lg">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
