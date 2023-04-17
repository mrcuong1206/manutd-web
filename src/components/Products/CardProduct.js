import React from "react";
import { Link } from "react-router-dom";
import classes from "./CardProduct.module.css";

const CardProduct = (props) => {
  return (
    <div className="relative cursor-pointer ">
      <div className={classes.position_btn}>
        <Link to={`/product-details/${props._id}`}>
          <img
            src={props.image}
            alt="img error"
            className={classes.position_img}
          />
        </Link>
      </div>
      <div className="flex flex-col absolute bottom-4 left-4 text-white font-bold text-3xl">
        <p className="text-xl">{props.number}</p>
        <span className="text-2xl">{props.firstname}</span>
        <span>{props.lastname}</span>
      </div>
    </div>
  );
};

export default CardProduct;
