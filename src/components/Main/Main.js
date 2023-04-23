import React from "react";
import Card from "./Card";
import axios from "axios";
import Loading from "../UI/Loading";
import InputForm from "../UI/InputForm";
import { useForm } from "react-hook-form";

const defaultValues = {
  search: "",
};

const Main = (props) => {
  const [player, setPlayer] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchText, setSearchText] = React.useState("");

  const { control, handleSubmit, setValue } = useForm({
    defaultValues,
  });

  const fetchData = async () => {
    const url = "http://localhost:8000/todo/";
    const data = await axios.get(url);
    console.log(data);
    setPlayer(data.data.data.todos);
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = async (value) => {
    console.log(value);
    if (value.search) {
      const data = await axios.get(
        `http://localhost:8000/todo?searchText=${value.search}`
      );
      setPlayer(data.data.data.todos);
    } else {
      fetchData();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSearch)} className="py-36">
        <InputForm
          type="text"
          name="search"
          placeholder="Search for a player"
          control={control}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setValue("search", e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
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
