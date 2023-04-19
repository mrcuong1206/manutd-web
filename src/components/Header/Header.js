import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <div className="flex bg-red-500 h-17 w-full justify-between z-10 fixed top-0">
        <div className="flex items-center">
          <Logo />
          <Menu />
        </div>
        <div className="flex items-center">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Header;
