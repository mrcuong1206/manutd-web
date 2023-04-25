import React from "react";
import Card from "./Card";
import axios from "axios";
import Loading from "../UI/Loading";

const Main = (props) => {
  const [player, setPlayer] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // Search
  const [query, setQuery] = React.useState("");
  const [originalPlayer, setOriginalPlayer] = React.useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8000/todo/";
    const data = await axios.get(url);
    setOriginalPlayer(data.data.data.todos);
    setPlayer(data.data.data.todos);
    setIsLoading(false);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  // Search
  React.useEffect(() => {
    const filteredPlayers = originalPlayer.filter(
      (item) =>
        item.lastname.toLowerCase().includes(query.toLowerCase()) ||
        item.firstname.toLowerCase().includes(query.toLowerCase())
    );
    setPlayer(filteredPlayers);
  }, [query, originalPlayer]);

  return (
    <div>
      <input
        className="m-auto  mt-36 placeholder:italic placeholder:text-slate-400 block bg-white w-96 border border-slate-300 rounded-md py-4 pl-5 pr-3 shadow-sm focus:outline-none focus:border-blue-500  sm:text-sm"
        placeholder="Search player..."
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="py-10 px-[15%] grid gap-7 grid-cols-4">
          {player && player.map((item) => <Card key={item._id} {...item} />)}
        </div>
      )}
    </div>
  );
};

export default Main;
