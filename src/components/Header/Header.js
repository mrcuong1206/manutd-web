import React from "react";
import Logo from "./Logo";
// import Search from "./Search";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex bg-red-500 h-17 w-full justify-between z-10 fixed top-0">
        <div className="flex items-center">
          <Logo />
          <Menu />
        </div>
        {/* <div className="flex items-center">
          <Search />
        </div> */}
        <div className="flex items-center pr-20 font-bold  text-white text-xl">
          <Link to="/">LOGIN</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
