import React from "react";

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <div>
      <button
        onClick={onClick}
        className="px-4 py-4 bg-red-900 hover:bg-red-600 text-[#fff]"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
