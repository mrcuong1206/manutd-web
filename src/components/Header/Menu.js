import React from 'react';

const Menu = () => {
  return (
    <div>
      <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex text-white">
        <li className="cursor-pointer font-bold block p-1 font-sans text-xl leading-normal text-inherit antialiased">
          Player
        </li>
        <li className="cursor-pointer font-bold block p-1 font-sans text-xl leading-normal text-inherit antialiased ">
          Shop
        </li>
      </ul>
    </div>
  );
};

export default Menu;
