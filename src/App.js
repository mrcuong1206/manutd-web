import React from "react";
import Header from "./components/Header/Header";
import Details from "./components/Main/Details";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Products/Shop";
import DetailsProduct from "./components/Products/DetailsProduct";
import FeedBack from "./components/Main/FeedBack";
import CreateProduct from "./components/Forms/CreateProduct";
import Login from "./components/Auth/Login";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:_id" element={<Details />} />
        <Route path="/shop/" element={<Shop />} />
        <Route path="/feedback/" element={<FeedBack />} />
        <Route path="/product-details/:_id" element={<DetailsProduct />} />
        <Route path="/create-product/" element={<CreateProduct />} />
        <Route path="/sign-up" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
