import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="ml-auto mr-8 items-center gap-6 flex text-white">
        <li className="cursor-pointer font-bold block p-1 font-sans text-xl leading-normal text-inherit antialiased">
          <Link to="/">PLAYER</Link>
        </li>
        <li className="cursor-pointer font-bold block p-1 font-sans text-xl leading-normal text-inherit antialiased ">
          <Link to="/shop">SHOP</Link>
        </li>
        <li className="cursor-pointer font-bold block p-1 font-sans text-xl leading-normal text-inherit antialiased ">
          <Link to="/feedback">FEEDBACK</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
