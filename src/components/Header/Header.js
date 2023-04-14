import React from 'react';
import Logo from './Logo';
import Cart from './Cart';
import Search from './Search';
import Menu from './Menu';

const Header = () => {
  return (
    <>
      <div className="flex bg-red-500 h-17 w-full justify-between">
        <div className="flex items-center">
          <Logo />
          <Menu />
        </div>
        <div className="flex items-center">
          <Search />
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Header;
