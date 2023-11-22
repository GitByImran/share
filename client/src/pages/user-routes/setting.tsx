import React from "react";
import Setup from "./route-contents/setting/setup";
import Access from "./route-contents/setting/access";

const Setting: React.FC = () => {
  return (
    <main className="py-10">
      <div className="custom-width px-5">
        <div className="flex flex-col gap-10">
          <Setup />
          <Access />
        </div>
      </div>
    </main>
  );
};

export default Setting;
