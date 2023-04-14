import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="relative cursor-pointer ">
      <div className="position-btn">
        <img src={props.image} alt="img error" className="position-img" />
      </div>
      <div className="flex flex-col absolute bottom-4 left-4 text-white font-bold text-3xl">
        <p className="text-xl">{props.number}</p>
        <span className="text-2xl">{props.firstname}</span>
        <span>{props.lastname}</span>
      </div>
    </div>
  );
};
export default Card;
