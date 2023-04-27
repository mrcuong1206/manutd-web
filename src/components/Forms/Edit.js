import React from "react";
import InputForm from "../UI/InputForm";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosClient from "../../api/axios.client";
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
  category: "",
};

const schema = yup.object().shape({
  name: yup.string().required(),
  stock: yup.number().required(),
  price: yup.number().required(),
  sale: yup.number().required(),
  description: yup.string().required(),
  image: yup.string().required(),
  category: yup.string().required(),
});

const Edit = () => {
  const { _id } = useParams();

  const { control, handleSubmit, setValue } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const fetchData = async () => {
    const data = await axiosClient.get(`/product/${_id}`);
    setValue("name", data.data.data.product.name);
    setValue("stock", data.data.data.product.stock);
    setValue("price", data.data.data.product.price);
    setValue("sale", data.data.data.product.sale);
    setValue("description", data.data.data.product.description);
    setValue("image", data.data.data.product.image);
    setValue("category", data.data.data.product.category);
  };

  React.useEffect(() => {
    fetchData();
  });

  const handleEditFrom = async (value) => {
    await axiosClient.patch(`/product/${_id}`, value);
    fetchData();
    toast.success("Update sản phẩm thành công!");
  };

  return (
    <div className="py-28">
      <form
        onSubmit={handleSubmit(handleEditFrom)}
        className="-mt-3 bg-[#f2edf3]"
      >
        <div>
          <h1 className="text-4xl p-10 text-regal-green font-bold italic">
            Edit Product
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-10 py-10 px-16 mt-1">
          <div className="flex flex-col">
            <div>
              <InputForm
                label="Name"
                type="text"
                name="name"
                control={control}
              />
              <InputForm
                label="Image"
                type="text"
                name="image"
                control={control}
              />
              <InputForm
                label="Description"
                type="text"
                name="description"
                control={control}
              />

              <InputForm
                label="Category"
                type="text"
                name="category"
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
              control={control}
            />
            <InputForm
              label="Price"
              type="number"
              name="price"
              control={control}
            />
            <InputForm
              label="Sale"
              type="number"
              name="sale"
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
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
