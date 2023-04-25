import React from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
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
    await axios.post("http://localhost:8000/product/", value);
    // toast.success("Thêm sản phẩm thành công");
    alert("Thêm sản phẩm thành công");
    navigate("/shop");
  };

  return (
    <div className="py-32">
      <form
        onSubmit={handleSubmit(handleCreateProduct)}
        className="p-3 bg-[#f2edf3]"
      >
        <div>
          <h1 className="text-4xl p-3 text-regal-green">Create Products</h1>
          <div className=" ml-3 h-1 bg-green-400 w-[15%]"></div>
        </div>
        <div className="grid grid-cols-2 gap-5 py-5 px-7 mt-1">
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
              <Link to="/shop">
                <Button className="p-3 px-8 bg-red-300 hover:bg-red-500 rounded-lg">
                  Cancel
                </Button>
              </Link>
            </div>
          </div>

          <div className="">
            <InputForm
              label="Description"
              type="text"
              name="description"
              placeholder="Type desc"
              control={control}
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
            <InputForm
              label="Category"
              type="text"
              name="category"
              placeholder="VD: Mũ, Quần, Áo,..."
              control={control}
            />
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
