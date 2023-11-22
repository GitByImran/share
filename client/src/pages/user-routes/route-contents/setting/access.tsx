import { MdHandshake } from "react-icons/md";
import { BsFillPostcardFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import Link from "next/link";
import React from "react";

const Access: React.FC = () => {
  return (
    <section className="text-gray-700">
      <div className="border rounded-lg shadow p-5 flex flex-col gap-5">
        <h2 className="text-lg font-semibold">Accessibility</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link
            href=""
            className="bg-gray-100 hover:bg-gray-200 p-5 rounded-lg"
          >
            <div className="flex flex-col items-start gap-3">
              <span className="text-7xl text-cyan-700">
                <HiUserGroup />
              </span>
              <div>
                <h2 className="text-lg font-semibold">Manage Groups</h2>
                <p>
                  View your created group, other related and suggested groups,
                  manage group settings.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href=""
            className="bg-gray-100 hover:bg-gray-200 p-5 rounded-lg"
          >
            <div className="flex flex-col items-start gap-3">
              <span className="text-7xl text-emerald-500">
                <BsFillPostcardFill />
              </span>
              <div>
                <h2 className="text-lg font-semibold">Manage Posts</h2>
                <p>Manage your posts history, make action against posts.</p>
              </div>
            </div>
          </Link>
          <Link
            href=""
            className="bg-gray-100 hover:bg-gray-200 p-5 rounded-lg"
          >
            <div className="flex flex-col items-start gap-3">
              <span className="text-7xl" style={{ color: "#C27781" }}>
                <MdHandshake />
              </span>
              <div>
                <h2 className="text-lg font-semibold">Manage Connections</h2>
                <p>
                  Manage your connection, remove existing connection, add more
                  connection and more.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Access;
