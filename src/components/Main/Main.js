import React from "react";
import Card from "./Card";
import axiosClient from "../../api/axios.client";
import Loading from "../UI/Loading";
import Button from "../UI/Button";

const Main = (props) => {
  const [player, setPlayer] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // Search
  const [query, setQuery] = React.useState("");
  const [originalPlayer, setOriginalPlayer] = React.useState([]);
  // Load more
  const [visiblePlayerCount, setVisiblePlayerCount] = React.useState(12);

  const fetchData = async () => {
    const data = await axiosClient.get("/todo");
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

  // Load more
  const handleLoadMore = () => {
    setVisiblePlayerCount(visiblePlayerCount + 4);
  };

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
          {player &&
            player
              .slice(0, visiblePlayerCount)
              .map((item, index) => <Card key={index} {...item} />)}
        </div>
      )}
      {visiblePlayerCount < player.length && (
        <div className="text-center mb-10">
          <Button onClick={handleLoadMore}>Load more</Button>
        </div>
      )}
    </div>
  );
};

export default Main;
