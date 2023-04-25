import React from "react";
import CardProduct from "./CardProduct";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const Shop = () => {
  const [product, setProduct] = React.useState([]);
  const [category, setCategory] = React.useState("all");

  React.useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/product/";
      const data = await axios.get(url);
      setProduct(data.data.data.products);
    };
    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="py-32">
      <div className="py-6 px-[15%] flex justify-between">
        <Link to="/create-product">
          <Button>Thêm</Button>
        </Link>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="px-6 py-3 border rounded-md shadow-sm focus:outline-none  focus:border-red-500 text-lg"
        >
          <option value="all">Tất cả</option>
          <option value="Áo">Áo</option>
          <option value="Mũ">Mũ</option>
        </select>
      </div>
      <div className="py-6 px-[15%] grid gap-7 grid-cols-4">
        {product &&
          product
            .filter((item) => {
              if (category === "all") {
                return true;
              }
              return item.category === category;
            })
            .map((item) => <CardProduct key={item._id} {...item} />)}
      </div>
    </div>
  );
};

export default Shop;
