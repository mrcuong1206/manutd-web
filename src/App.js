import React from "react";
import Header from "./components/Header/Header";
import Details from "./components/Main/Details";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Products/Shop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:_id" element={<Details />} />
        <Route path="/shop/" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
