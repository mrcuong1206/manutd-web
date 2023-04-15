import React from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [player, setPlayer] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/todo/";
      const data = await axios.get(url);
      console.log(data.data);
      setPlayer(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="py-6 px-[15%] grid gap-7 grid-cols-4">
      {player && player.map((item) => <Card key={item._id} {...item} />)}
    </div>
  );
};

export default Main;
