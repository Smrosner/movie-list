import React from "react";
import axios from "axios";

function AddMovie({ addMovie, setAddMovie, addsMovies }) {
  const handleChange = (e) => {
    e.preventDefault();
    setAddMovie(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/movies", {
        title: addMovie,
      });
    } catch (err) {
      console.error(err.message);
    }
    addsMovies(addMovie);
    setAddMovie("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="add-movie"
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
