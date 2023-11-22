import { GrSort } from "react-icons/gr";
import React from "react";
import { HiClock } from "react-icons/hi2";

const UserActivity = () => {
  const truncateText = (text: string, maxWords: number) => {
    const words = text.split(" ");

    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }

    return text;
  };
  return (
    <section>
      <div className="right-top-part flex flex-col gap-5">
        <div className="p-5 border rounded-xl shadow text-gray-700">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">Smith's Activity</p>
            <button className="flex items-center gap-1 border rounded-md px-3 py-1 bg-gray-50 hover:bg-gray-100">
              <span className="mt-1" style={{ transform: "scaleX(-1)" }}>
                <GrSort />
              </span>
              <span className="text-lg font-semibold">Filter</span>
            </button>
          </div>
        </div>
        <div className="right-down-part flex flex-col justify-between text-gray-700">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 border p-5 rounded-lg overflow-hidden shadow flex flex-col items-start gap-2">
              <p className="text-lg post-header">
                {truncateText(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate itaque ab impedit magni veritatis obcaecati quod sequi iste at dicta suscipit quo, cum incidunt dolor! Ducimus distinctio harum esse fugit facilis voluptatem pariatur dolorem expedita praesentium, quaerat amet eum? Consequatur totam asperiores eaque assumenda eligendi! Corrupti mollitia sit iure.",
                  10
                )}
              </p>
              <p className="flex items-center gap-1">
                <span className="text-gray-700">
                  <HiClock />
                </span>
                Uploaded on 22-10-2023
              </p>
              <button className="underline font-semibold text-cyan-700">
                Read it
              </button>
            </div>
            <div className="col-span-12 md:col-span-6 border p-5 rounded-lg overflow-hidden shadow flex flex-col items-start gap-2">
              <p className="text-lg post-header">
                {truncateText(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate itaque ab impedit magni veritatis obcaecati quod sequi iste at dicta suscipit quo, cum incidunt dolor! Ducimus distinctio harum esse fugit facilis voluptatem pariatur dolorem expedita praesentium, quaerat amet eum? Consequatur totam asperiores eaque assumenda eligendi! Corrupti mollitia sit iure.",
                  10
                )}
              </p>
              <p className="flex items-center gap-1">
                <span className="text-gray-700">
                  <HiClock />
                </span>
                Uploaded on 22-10-2023
              </p>
              <button className="underline font-semibold text-cyan-700">
                Read it
              </button>
            </div>
            <div className="col-span-12 md:col-span-6 border p-5 rounded-lg overflow-hidden shadow flex flex-col items-start gap-2">
              <p className="text-lg post-header">
                {truncateText(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate itaque ab impedit magni veritatis obcaecati quod sequi iste at dicta suscipit quo, cum incidunt dolor! Ducimus distinctio harum esse fugit facilis voluptatem pariatur dolorem expedita praesentium, quaerat amet eum? Consequatur totam asperiores eaque assumenda eligendi! Corrupti mollitia sit iure.",
                  10
                )}
              </p>
              <p className="flex items-center gap-1">
                <span className="text-gray-700">
                  <HiClock />
                </span>
                Uploaded on 22-10-2023
              </p>
              <button className="underline font-semibold text-cyan-700">
                Read it
              </button>
            </div>
            <div className="col-span-12 md:col-span-6 border p-5 rounded-lg overflow-hidden shadow flex flex-col items-start gap-2">
              <p className="text-lg post-header">
                {truncateText(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate itaque ab impedit magni veritatis obcaecati quod sequi iste at dicta suscipit quo, cum incidunt dolor! Ducimus distinctio harum esse fugit facilis voluptatem pariatur dolorem expedita praesentium, quaerat amet eum? Consequatur totam asperiores eaque assumenda eligendi! Corrupti mollitia sit iure.",
                  10
                )}
              </p>
              <p className="flex items-center gap-1">
                <span className="text-gray-700">
                  <HiClock />
                </span>
                Uploaded on 22-10-2023
              </p>
              <button className="underline font-semibold text-cyan-700">
                Read it
              </button>
            </div>
            <div className="col-span-12 md:col-span-6 border p-5 rounded-lg overflow-hidden shadow flex flex-col items-start gap-2">
              <p className="text-lg post-header">
                {truncateText(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate itaque ab impedit magni veritatis obcaecati quod sequi iste at dicta suscipit quo, cum incidunt dolor! Ducimus distinctio harum esse fugit facilis voluptatem pariatur dolorem expedita praesentium, quaerat amet eum? Consequatur totam asperiores eaque assumenda eligendi! Corrupti mollitia sit iure.",
                  10
                )}
              </p>
              <p className="flex items-center gap-1">
                <span className="text-gray-700">
                  <HiClock />
                </span>
                Uploaded on 22-10-2023
              </p>
              <button className="underline font-semibold text-cyan-700">
                Read it
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserActivity;
