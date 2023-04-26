import React from "react";
import CardProduct from "./CardProduct";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import axiosClient from "../../api/axios.client";

const Shop = () => {
  const [product, setProduct] = React.useState([]);
  const [category, setCategory] = React.useState("all");
  // Load more
  const [visibleProduct, setVisibleProduct] = React.useState(12);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await axiosClient.get("/product");
      setProduct(data.data.data.products);
    };
    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Load more
  const handleLoadMore = () => {
    setVisibleProduct(visibleProduct + 4);
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
          <option value="Giày">Giày</option>
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
            .slice(0, visibleProduct)
            .map((item) => <CardProduct key={item._id} {...item} />)}
      </div>
      {visibleProduct < product.length && (
        <div className="text-center mt-10 -mb-10">
          <Button onClick={handleLoadMore}>Load more</Button>
        </div>
      )}
    </div>
  );
};

export default Shop;
