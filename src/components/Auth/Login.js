import React, { useState } from "react";
import axiosClient from "../../api/axios.client";

import InputForm from "../UI/InputForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const defaultValues = {
  email: "",
  password: "",
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmitLogin = async (value) => {
    try {
      const response = await axiosClient.post("/login", value);
      if (response.data.status === "ok") {
        setSuccessMessage(alert("Đăng nhập thành công!"));
        //
        localStorage.setItem("token", response.data.token);
        navigate("/main");
      } else {
        setErrorMessage(
          alert("Email hoặc mật khẩu sai! Vui lòng kiểm tra lại!")
        );
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-60 bg-gray-100">
      <form
        onSubmit={handleSubmit(handleSubmitLogin)}
        className="bg-white rounded-lg shadow-md p-8 w-120"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <InputForm
          label="Email: "
          type="text"
          name="email"
          placeholder="Type email"
          control={control}
          className="mb-4"
        />
        <InputForm
          label="Password: "
          type="password"
          name="password"
          placeholder="Type password"
          control={control}
          className="mb-4"
        />
        <div>
          <Link to="/sign-up">Don't have account?</Link>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-16"
          >
            Login
          </button>
        </div>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
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
  );
}

export default Login;
