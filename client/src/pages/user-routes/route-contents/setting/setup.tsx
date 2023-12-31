import { MdVerifiedUser } from "react-icons/md";
import { FcPrivacy } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

const Setup: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section className={`${theme === "dark" ? "text-white" : "text-black"}`}>
      <div className="border rounded-lg shadow p-5 flex flex-col gap-5">
        <h2 className="text-lg font-semibold">Account Centre</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link
            href="/user-routes/route-contents/setting/manage-profile"
            className="border-2 hover:bg-gray-50 hover:text-black p-5 rounded-lg"
          >
            <div className="flex flex-col items-start gap-3">
              <span className="text-7xl">
                <FcManager />
              </span>
              <div>
                <h2 className="text-lg font-semibold">Personal Profile</h2>
                <p>
                  Edit your personal details for the profile, control data that
                  you want to share with others.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/user-routes/route-contents/setting/manage-privacy"
            className="border-2 hover:bg-gray-50 hover:text-black p-5 rounded-lg"
          >
            <div className="flex flex-col items-start gap-3">
              <span className="text-7xl">
                <FcPrivacy />
              </span>
              <div>
                <h2 className="text-lg font-semibold">Privacy Setup</h2>
                <p>
                  Secure your account, update with our policy, and check your
                  profile visibility to others.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/user-routes/route-contents/setting/manage-verifications"
            className="border-2 hover:bg-gray-50 hover:text-black p-5 rounded-lg"
          >
            <div className="flex flex-col items-start gap-3">
              <span className="text-7xl text-blue-500">
                <MdVerifiedUser />
              </span>
              <div>
                <h2 className="text-lg font-semibold">Verifications</h2>
                <p>
                  Verify your account, explore and share with more security and
                  facilities.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Setup;
