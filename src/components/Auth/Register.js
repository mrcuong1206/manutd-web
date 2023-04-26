import React, { useState } from "react";
import axiosClient from "../../api/axios.client";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");

    try {
      const response = await axiosClient.post("/register", {
        fname,
        lname,
        email,
        password,
      });

      if (response.status === 200) {
        alert("Đăng ký thành công!");
        navigate("/");
      }
    } catch (error) {
      setError(error.response.data.error);
      if (error.response.status === 409) {
        setError(alert("Tài khoản đã tồn tại"));
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-48 bg-gray-100">
      {error && <div>{error}</div>}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-8 w-120"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <div className="mb-4 w-full">
          <label htmlFor="fname" className="block text-gray-700 font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="lname" className="block text-gray-700 font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
