import React from 'react';
import Logo from './Logo';
import Cart from './Cart';

const Header = () => {
  return (
    <div className="flex bg-red-500 h-17 w-full justify-between">
      <Logo />
      <Cart />
    </div>
  );
};

export default Header;
