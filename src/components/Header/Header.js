import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <div className="flex bg-red-500 w-full justify-between z-10 fixed top-0">
        <div className="flex items-center">
          <Logo />
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Header;
