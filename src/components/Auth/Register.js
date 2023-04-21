import React, { useState } from "react";
import axios from "axios";
import InputForm from "../UI/InputForm";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().min(5).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmitRegister = async (value) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/register/",
        value
      );
      if (response.status === "ok") {
        setSuccessMessage(alert("Đăng kí thành công!"));
      } else {
        setErrorMessage(alert("Tài khoản đã tồn tại!"));
      }
      console.log(response);
    } catch (error) {
      setErrorMessage(alert("That bai!"));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-40 bg-gray-100">
      <form
        onSubmit={handleSubmit(handleSubmitRegister)}
        className="bg-white rounded-lg shadow-md p-8 w-120"
      >
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
        <InputForm
          label="First name: "
          type="text"
          name="firstName"
          placeholder="Type email"
          control={control}
        />
        <InputForm
          label="Last name: "
          type="text"
          name="lastName"
          placeholder="Type email"
          control={control}
        />
        <InputForm
          label="Email: "
          type="email"
          name="email"
          placeholder="Type email"
          control={control}
        />
        <InputForm
          label="Password: "
          type="password"
          name="password"
          placeholder="Type email"
          control={control}
        />
        <InputForm
          label="Confirm password: "
          type="password"
          name="confirmPassword"
          placeholder="Type confirm"
          control={control}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-16"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default Register;
