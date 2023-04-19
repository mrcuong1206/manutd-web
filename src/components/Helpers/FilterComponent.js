import React from "react";
// import axios from "axios";

function FilterComponent(props) {
  // const [searchText, setSearchText] = React.useState("");
  // const [products, setProducts] = React.useState([]);

  // const handleSearchTextChange = (event) => {
  //   setSearchText(event.target.value);
  // };

  // const handleFilterClick = () => {
  //   axios
  //     .get(`http://localhost:8000/todo?name=${searchText}`)
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // };

  return (
    <div>
      {/* <input type="text" onChange={handleSearchTextChange} />
      <button onClick={handleFilterClick}>Filter</button>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.lastname}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default FilterComponent;
