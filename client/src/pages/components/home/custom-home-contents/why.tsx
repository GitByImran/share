import { BiCheckDouble } from "react-icons/bi";
import Image from "next/image";
import React from "react";

const informations = [
  {
    title: "Share Your Expertise",
    body: "Whether you're a seasoned professional or a passionate hobbyist, share your knowledge with the world. Create engaging content, write insightful articles, or contribute to discussions in your area of expertise.",
  },
  {
    title: "Discover New Frontiers",
    body: "Dive into a vast ocean of knowledge contributed by our diverse community. Explore articles, tutorials, and discussions on a wide range of topics. The more you explore, the more you'll discover.",
  },
  {
    title: "Connect and Collaborate",
    body: "Engage with like-minded individuals, form connections, and collaborate on projects. Our community is a hub of inspiration and collaboration, fostering a supportive environment for growth.",
  },
  {
    title: "Stay Informed",
    body: "Keep up with the latest trends, innovations, and discussions in your field. Our platform provides a dynamic space where ideas flourish and knowledge evolves.",
  },
  {
    title: "Build Your Online Presence",
    body: "Establish yourself as an authority in your field. Your profile on [Your Web App Name] is your digital identity, showcasing your contributions and expertise.",
  },
  {
    title: "Foster Creativity",
    body: "Unlock your creative potential by engaging with a community that celebrates and nurtures creativity. Whether you're an artist, writer, or designer, find inspiration and support here.",
  },
  {
    title: "Empower Others",
    body: "Make a positive impact by empowering others with your knowledge and experiences. Contribute to discussions, provide guidance, and be a mentor to those seeking to learn and grow.",
  },
];

const WhyToUs: React.FC = () => {
  return (
    <div>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="">
          <Image
            src="/main-1.png"
            alt="main-1"
            height={500}
            width={500}
            layout="responsive"
          />
        </div>

        {informations.map((data, index) => (
          <div
            key={index}
            className="text-gray-700 flex flex-col gap-2 p-5 border rounded-lg shadow-lg"
          >
            <span className="text-5xl text-cyan-700">
              <BiCheckDouble />
            </span>
            <h2 className="text-lg font-semibold">{data.title}</h2>
            <p>{data.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyToUs;
