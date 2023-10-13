import React from "react";

function Search({ searchMovie, setSearchInput, movies }) {
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchMovie}
      />
      <input type="submit" value="Go!" />
    </form>
  );
}

export default Search;
