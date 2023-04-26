import React from "react";
import { Link } from "react-router-dom";
import classes from "./CardProduct.module.css";
import axiosClient from "../../api/axios.client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../UI/Button";

const CardProduct = (props) => {
  const [product, setProduct] = React.useState([]);

  const fetchData = async () => {
    const data = await axiosClient.get("/product");
    setProduct(data.data.data.products);
  };

  const handleDelete = () => {
    axiosClient
      .delete(`/product/${props._id}`)
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
            <Button>Sửa</Button>
          </Link>
          <Button onClick={handleDelete}>Xóa</Button>
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
