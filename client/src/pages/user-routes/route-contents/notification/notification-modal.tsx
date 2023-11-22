import { BiCheckCircle } from "react-icons/bi";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NotificationModal: React.FC = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const truncateText = (text: string, maxWords: number) => {
    const words = text.split(" ");

    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }

    return text;
  };
  return (
    <div className="w-72 h-96 pb-5 overflow-y-scroll overflow-visible bg-white border shadow-lg">
      <div className="px-5 text-gray-700">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold sticky top-0 py-2 border-b-2 bg-white">
            Notification
          </h2>
          <Link href="" className="hover:text-cyan-700 font-semibold">
            <div className="flex flex-row gap-2">
              <span className="text-lg mt-1">
                <BiCheckCircle />
              </span>
              <div className="flex flex-col">
                <span className="text-sm">
                  {truncateText(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate itaque ab impedit magni veritatis obcaecati quod sequi iste at dicta suscipit quo, cum incidunt dolor! Ducimus distinctio harum esse fugit facilis voluptatem pariatur dolorem expedita praesentium, quaerat amet eum? Consequatur totam asperiores eaque assumenda eligendi! Corrupti mollitia sit iure.",
                    10
                  )}
                </span>
                <span className="text-sm text-gray-500">12 minute ago</span>
              </div>
            </div>
          </Link>
          <Link href="" className="hover:text-cyan-700 font-semibold">
            <div className="flex flex-row gap-2">
              <span className="text-lg mt-1">
                <BiCheckCircle />
              </span>
              <div className="flex flex-col">
                <span className="text-sm">
                  {truncateText(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate itaque ab impedit magni veritatis obcaecati quod sequi iste at dicta suscipit quo, cum incidunt dolor! Ducimus distinctio harum esse fugit facilis voluptatem pariatur dolorem expedita praesentium, quaerat amet eum? Consequatur totam asperiores eaque assumenda eligendi! Corrupti mollitia sit iure.",
                    10
                  )}
                </span>
                <span className="text-sm text-gray-500">12 minute ago</span>
              </div>
            </div>
          </Link>
          <Link href="" className="hover:text-cyan-700 font-semibold">
            <div className="flex flex-row gap-2">
              <span className="text-lg mt-1">
                <BiCheckCircle />
              </span>
              <div className="flex flex-col">
                <span className="text-sm">
                  {truncateText(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate itaque ab impedit magni veritatis obcaecati quod sequi iste at dicta suscipit quo, cum incidunt dolor! Ducimus distinctio harum esse fugit facilis voluptatem pariatur dolorem expedita praesentium, quaerat amet eum? Consequatur totam asperiores eaque assumenda eligendi! Corrupti mollitia sit iure.",
                    10
                  )}
                </span>
                <span className="text-sm text-gray-500">12 minute ago</span>
              </div>
            </div>
          </Link>
          <Link href="" className="hover:text-cyan-700 font-semibold">
            <div className="flex flex-row gap-2">
              <span className="text-lg mt-1">
                <BiCheckCircle />
              </span>
              <div className="flex flex-col">
                <span className="text-sm">
                  {truncateText(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate itaque ab impedit magni veritatis obcaecati quod sequi iste at dicta suscipit quo, cum incidunt dolor! Ducimus distinctio harum esse fugit facilis voluptatem pariatur dolorem expedita praesentium, quaerat amet eum? Consequatur totam asperiores eaque assumenda eligendi! Corrupti mollitia sit iure.",
                    10
                  )}
                </span>
                <span className="text-sm text-gray-500">12 minute ago</span>
              </div>
            </div>
          </Link>
          <Link href="" className="hover:text-cyan-700 font-semibold">
            <div className="flex flex-row gap-2">
              <span className="text-lg mt-1">
                <BiCheckCircle />
              </span>
              <div className="flex flex-col">
                <span className="text-sm">
                  {truncateText(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate itaque ab impedit magni veritatis obcaecati quod sequi iste at dicta suscipit quo, cum incidunt dolor! Ducimus distinctio harum esse fugit facilis voluptatem pariatur dolorem expedita praesentium, quaerat amet eum? Consequatur totam asperiores eaque assumenda eligendi! Corrupti mollitia sit iure.",
                    10
                  )}
                </span>
                <span className="text-sm text-gray-500">12 minute ago</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
