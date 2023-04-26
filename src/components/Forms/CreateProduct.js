import React from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosClient from "../../api/axios.client";
import InputForm from "../UI/InputForm";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// default value
const defaultValues = {
  name: "",
  stock: "",
  price: "",
  sale: "",
  description: "",
  category: "",
  image: "",
};

const schema = yup.object().shape({
  name: yup.string().required(),
  stock: yup.number().required(),
  price: yup.number().required(),
  sale: yup.number().required(),
  description: yup.string().required(),
  category: yup.string().required(),
  image: yup.string().required(),
});

const CreateProduct = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleCreateProduct = async (value) => {
    await axiosClient.post("/product", value);
    alert("Thêm sản phẩm thành công");
    navigate("/shop");
  };

  return (
    <div className="py-32">
      <form
        onSubmit={handleSubmit(handleCreateProduct)}
        className="-mt-3 bg-[#f2edf3]"
      >
        <div>
          <h1 className="text-4xl p-10 text-regal-green font-bold italic">
            Create Product
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-10 py-10 px-16 mt-1">
          <div className="flex flex-col">
            <div>
              <InputForm
                label="Name"
                type="text"
                name="name"
                placeholder="Type name"
                control={control}
              />
              <InputForm
                label="Image"
                type="text"
                name="image"
                placeholder="Type ../assets/product/ao?giay?mu/"
                control={control}
              />
              <InputForm
                label="Description"
                type="text"
                name="description"
                placeholder="Type desc"
                control={control}
              />

              <InputForm
                label="Category"
                type="text"
                name="category"
                placeholder="VD: Mũ, Giày, Áo,..."
                control={control}
              />
            </div>
          </div>

          <div className="">
            <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <InputForm
              label="Stock"
              type="number"
              name="stock"
              placeholder="Type stock"
              control={control}
            />
            <InputForm
              label="Price"
              type="number"
              name="price"
              placeholder="Type price"
              control={control}
            />
            <InputForm
              label="Sale"
              type="number"
              name="sale"
              placeholder="Type sale"
              control={control}
            />
            <div className="flex gap-10 mt-5 mx-10">
              <Button
                className="mr-3 p-3 px-8 bg-regal-green hover:bg-green-500 rounded-lg"
                type="submit"
              >
                Submit
              </Button>
              <Link to="/shop">
                <Button className="p-3 px-8 bg-red-300 hover:bg-red-500 rounded-lg">
                  Cancel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
