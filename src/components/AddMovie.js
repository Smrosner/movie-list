import React from "react";

function AddMovie({ addMovie, setAddMovie, addsMovies }) {
  const handleChange = (e) => {
    e.preventDefault();
    setAddMovie(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addsMovies(addMovie);
    setAddMovie("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="add-movie"
        type="text"
        placeholder="Add movie title here"
        onChange={handleChange}
        value={addMovie}
      />
      <input className="add-button" type="submit" value="Add" />
    </form>
  );
}
export default AddMovie;
