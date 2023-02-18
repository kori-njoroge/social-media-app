import React from "react";
import { useState } from "react";
import "../styles/search.component.css";

let SearchComponent = ({ placeholder, elementId, onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="c-Search-Container">
        <input
          className="c-Search-Container__Input"
          type="text"
          placeholder={placeholder}
          id={elementId}
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className="c-Search-Container__Button">
            <i class="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </form>
  );
};

export default SearchComponent;
