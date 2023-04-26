import React from "react";
import axiosClient from "../../api/axios.client";
import { useParams } from "react-router-dom";

const DetailsProduct = (props) => {
  const { _id } = useParams();
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await axiosClient.get(`/product/${_id}`);

      setProduct(data.data.data.product);
    };
    fetchData();
  }, [_id]);
  return (
    <React.Fragment>
      {product && (
        <div className="flex justify-around my-10 py-32">
          <div className="w-1/2">
            <img
              src={product.image}
              alt="err"
              className="m-auto h-120 w-120 object-cover"
            />
          </div>
          <div className="w-1/2 m-auto text-center flex flex-col gap-y-8">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-green-600 text">Personalisation available</p>
            <div>
              <span className="text-green-600  ">{product.stock}</span> products
              available
            </div>
            <div className="flex justify-center gap-10">
              <div className="line-through">Regular: ${product.price}</div>
              <div className="text-xl text-red-500 font-bold">
                Reducer: ${product.sale}
              </div>
            </div>
            <div>
              <p className="font-bold text-xl">Description: </p>
              <div className="max-w-2xl ml-48 mb-6">{product.description}</div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default DetailsProduct;
