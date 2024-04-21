import React, { useState } from "react";
import userElement from "../Pages/Home";
import { FaSearch } from "react-icons/fa";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://api.github.com/users/ChidinmaNwosu/repos")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);

        const results = json.filter((userElement) => {
          return (
            value &&
            userElement &&
            userElement.name &&
            userElement.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
