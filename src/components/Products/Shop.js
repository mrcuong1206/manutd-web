import React from "react";
import CardProduct from "./CardProduct";
import axios from "axios";
import { Link } from "react-router-dom";

const Shop = () => {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/product/";
      const data = await axios.get(url);

      setProduct(data.data.data.products);
    };
    fetchData();
  }, []);

  return (
    <div className="py-32">
      <div className="py-6 px-[15%]">
        <Link to="/sign-up">
          <button>Sign up</button>
        </Link>
        <Link to="/create-product">
          <button>Add</button>
        </Link>
      </div>
      <div className="py-6 px-[15%] grid gap-7 grid-cols-4">
        {product &&
          product.map((item) => <CardProduct key={item._id} {...item} />)}
      </div>
    </div>
  );
};

export default Shop;
