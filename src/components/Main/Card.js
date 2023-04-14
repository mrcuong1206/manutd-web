import React from 'react';

const Card = (props) => {
  return (
    <div className="relative cursor-pointer">
      <img src={props.image} alt="img error" className=" w-100 h-100 " />
      <div className="flex flex-col absolute bottom-4 left-4 text-white font-bold text-2xl">
        <p>{props.number}</p>
        <span>{props.firstname}</span>
        <span>{props.lastname}</span>
      </div>
    </div>
  );
};
export default Card;
