import React from "react";
import Card from "./Card";
import axios from "axios";
import FilterComponent from "../Helpers/FilterComponent";
import Loading from "../UI/Loading";

const Main = (props) => {
  const [player, setPlayer] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/todo/";
      const data = await axios.get(url);
      console.log(data);
      setPlayer(data.data.data.todos);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <FilterComponent />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="py-36 px-[15%] grid gap-7 grid-cols-4">
          {player && player.map((item) => <Card key={item._id} {...item} />)}
        </div>
      )}
    </div>
  );
};

export default Main;
