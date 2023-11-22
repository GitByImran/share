import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import React from "react";
import Link from "next/link";

const informations = [
  {
    icon: "🌐",
    title: " Diverse Perspectives",
    body: "Explore a rich tapestry of thoughts and ideas from individuals spanning various fields and backgrounds.",
  },
  {
    icon: "🤝",
    title: "Collaborative Community",
    body: "Connect with like-minded enthusiasts, collaborate on projects, and form lasting connections.",
  },
  {
    icon: "🚀",
    title: "Continuous Learning",
    body: " Immerse yourself in a dynamic environment where curiosity is celebrated, and learning knows no bounds.",
  },
];

const About: React.FC = () => {
  return (
    <div className="">
      <div className="pt-20 text-gray-700">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl md:text-start text-center font-semibold flex items-center md:flex-row flex-col gap-2">
            <span className="text-cyan-700 text-5xl">
              <AiOutlineThunderbolt />
            </span>
            Our Mission: Ignite Curiosity, Foster Collaboration
          </h2>
          <p className="w-8/12 text-center">
            At Share, we believe that every individual is a source of
            inspiration. Our mission is to empower you to share your insights,
            learn from others, and collectively elevate the pool of human
            knowledge.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 py-20">
          {informations.map((data, index) => (
            <div
              key={index}
              className="text-gray-700 flex flex-col gap-3 p-5 border rounded-lg"
            >
              <span className="text-5xl text-cyan-700 mb-5">{data.icon}</span>
              <h2 className="text-lg font-semibold">{data.title}</h2>
              <p>{data.body}</p>
            </div>
          ))}
          <div className="col-span-full lg:col-span-3 text-gray-700 flex flex-col gap-3 p-5 border rounded-lg">
            <span className="text-5xl text-cyan-700 mb-5">🌟</span>

            <h2 className="text-lg font-semibold">
              Join Us on the Journey of Knowledge Exploration!
            </h2>
            <p>
              Whether you're here to share your expertise, dive into fascinating
              discussions, or simply absorb the wealth of insights, here is your
              digital sanctuary for knowledge exchange.
              <br />
              Ready to embark on a journey where every idea has a place, and
              wisdom finds its voice? <Link href="">[Sign Up Now]</Link> and
              become part of a community that believes in the transformative
              power of shared knowledge.
            </p>
            <Link
              href=""
              className="px-2 text-3xl bg-transparent hover:bg-cyan-700 border border-cyan-700 rounded-lg text-cyan-700 hover:text-white duration-100 font-bold w-fit"
            >
              <BiRightArrowAlt />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
