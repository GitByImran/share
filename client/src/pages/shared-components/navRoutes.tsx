import React, { useEffect } from "react";
import NavMenus from "./navmenus";

interface NavProps {
  setShowHandleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showHandleMenu: boolean;
}

const NavRoutes: React.FC<NavProps> = ({
  setShowHandleMenu,
  showHandleMenu,
}) => {
  return (
    <div className="">
      <div className="onRegularDevice hidden md:block">
        <NavMenus
          setShowHandleMenu={setShowHandleMenu}
          showHandleMenu={showHandleMenu}
        />
      </div>
      <div
        id="responsiveMenu"
        className={`onResponsiveDevice md:hidden block fixed z-50 right-0 px-5 mr-5 mt-12 rounded-s-xl border-2 bg-white transition-width duration-1000  ${
          showHandleMenu ? "hidden w-0" : "bolck w-fit custom-gradient"
        }`}
      >
        <NavMenus
          setShowHandleMenu={setShowHandleMenu}
          showHandleMenu={showHandleMenu}
        />
      </div>
    </div>
  );
};

export default NavRoutes;
