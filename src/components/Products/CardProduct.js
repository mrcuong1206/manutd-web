import React from "react";
import { Link } from "react-router-dom";
import classes from "./CardProduct.module.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardProduct = (props) => {
  const [product, setProduct] = React.useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8000/product/";
    const data = await axios.get(url);
    setProduct(data.data.data.products);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/product/${props._id}`)
      .then((res) => {
        toast.success("Product deleted successfully!");
        setProduct(product.filter((item) => item._id !== props._id));
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

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
          <Link to={`/edit-product/${props._id}`}>
            <button className="mr-10">Sửa</button>
          </Link>
          <button onClick={handleDelete}>Xóa</button>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
