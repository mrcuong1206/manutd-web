import React from 'react';

const Button = (props) => {
  const { children } = props;
  return (
    <div>
      <button className="px-4 py-4 bg-[orange] text-[#fff]">{children}</button>
    </div>
  );
};

export default Button;
