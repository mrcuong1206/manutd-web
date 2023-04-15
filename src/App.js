import React from "react";
import Header from "./components/Header/Header";
import Details from "./components/Main/Details";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  // const datas = [
  //   {
  //     id: 1,
  //     image: "./assets/manutd/gea.png",
  //     number: "1",
  //     position: "gk",
  //     firstname: "David",
  //     lastname: "De Gea",
  //     detail: [
  //       {
  //         country: "Spain",
  //         dofb: "7 nov 1990",
  //         join: "29 jun 2011",
  //         app: "553",
  //         stated:
  //           "I don’t know who is the best goalkeeper in the world at the moment, but I want to be the best.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     image: "./assets/manutd/bruno.png",
  //     number: "8",
  //     position: "cm",
  //     firstname: "Bruno",
  //     lastname: "Fernaldes",
  //     detail: [
  //       {
  //         country: "Portuga",
  //         dofb: "8 Sep 1994",
  //         join: "30 Jan 2020",
  //         app: "174",
  //         stated:
  //           "To play for United feels incredible. I can promise the fans I will give everything to help bring us success.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     image: "./assets/manutd/rashford.png",
  //     number: "19",
  //     position: "st",
  //     firstname: "Marcus",
  //     lastname: "Rashford",
  //   },
  //   {
  //     id: 4,
  //     image: "./assets/manutd/casemiro.png",
  //     number: "18",
  //     position: "cm",
  //     firstname: "Mr",
  //     lastname: "Casemiro",
  //   },
  //   {
  //     id: 5,
  //     image: "./assets/manutd/eriksen.png",
  //     number: "14",
  //     position: "cm",
  //     firstname: "Chirsan",
  //     lastname: "Eriksen",
  //   },
  //   {
  //     id: 6,
  //     image: "./assets/manutd/rooney.jpg",
  //     number: "10",
  //     position: "st",
  //     firstname: "Wayne",
  //     lastname: "Rooney",
  //   },
  //   {
  //     id: 7,
  //     image: "./assets/manutd/varane.png",
  //     number: "3",
  //     position: "CB",
  //     firstname: "Rafeal",
  //     lastname: "Varane",
  //   },
  //   {
  //     id: 8,
  //     image: "./assets/manutd/martinez.png",
  //     number: "6",
  //     position: "cb",
  //     firstname: "Lisanro",
  //     lastname: "Martinez",
  //   },
  // ];

  // const [data] = React.useState(datas);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
