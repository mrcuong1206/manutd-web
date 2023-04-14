import React from 'react';
import cartSrc from '../../assets/icon/bx-cart.svg';

const Cart = (props) => {
  return (
    <div className="py-5 px-20 flex align-middle">
      <img src={cartSrc} alt="cart logo" className="w-10 cursor-pointer"></img>
    </div>
  );
};

export default Cart;
