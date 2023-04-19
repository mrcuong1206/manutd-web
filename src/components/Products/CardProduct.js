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
        <div className={classes.add_cart}>
          <button className="mr-10">Sửa</button>
          <button>Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
