import React from "react";
import InputForm from "../UI/InputForm";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../UI/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultValues = {
  name: "",
  stock: "",
  price: "",
  sale: "",
  description: "",
  image: "",
};

const schema = yup.object().shape({
  name: yup.string().required(),
  stock: yup.number().required(),
  price: yup.number().required(),
  sale: yup.number().required(),
  description: yup.string().required(),
  image: yup.string().required(),
});

const Edit = () => {
  const { _id } = useParams();

  const { control, handleSubmit, setValue } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const fetchData = async () => {
    const data = await axios.get(`http://localhost:8000/product/${_id}`);
    setValue("name", data.data.data.product.name);
    setValue("stock", data.data.data.product.stock);
    setValue("price", data.data.data.product.price);
    setValue("sale", data.data.data.product.sale);
    setValue("description", data.data.data.product.description);
    setValue("image", data.data.data.product.image);
  };

  React.useEffect(() => {
    fetchData();
  });

  const handleEditFrom = async (value) => {
    await axios.patch(`http://localhost:8000/product/${_id}`, value);
    fetchData();
    toast.success("Product updated successfully!");
  };

  return (
    <div className="py-32">
      <form
        onSubmit={handleSubmit(handleEditFrom)}
        className="p-3 bg-[#f2edf3]"
      >
        <div>
          <h1 className="text-4xl p-3 text-regal-green">Edit Product</h1>
          <div className=" ml-3 h-1 bg-green-400 w-[15%]"></div>
        </div>
        <div className="grid grid-cols-2 gap-5 py-5 px-7 mt-1">
          <div className="flex flex-col">
            <div>
              <InputForm
                label="Name"
                type="text"
                name="name"
                placeholder="Type Room"
                control={control}
              />
              <InputForm
                label="Stock"
                type="text"
                name="stock"
                control={control}
              />
            </div>
            <div className="flex">
              <Button
                className="mr-3 p-3 px-8 bg-regal-green hover:bg-green-500 rounded-lg"
                type="submit"
              >
                Submit
              </Button>
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
              <Link to="/shop">
                <Button
                  className="p-3 px-8 bg-red-300 hover:bg-red-500 rounded-lg"
                  type="button"
                >
                  Back
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <InputForm
              label="price"
              type="text"
              name="price"
              placeholder="Type bed"
              control={control}
            />
            <InputForm
              label="sale"
              type="text"
              name="sale"
              placeholder="Type bath"
              control={control}
            />
            <InputForm
              label="desc"
              type="text"
              name="description"
              placeholder="Type tivi"
              control={control}
            />
            <InputForm
              label="image"
              type="text"
              name="image"
              placeholder="Type bar"
              control={control}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
