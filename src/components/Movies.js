import React from "react";
import Movie from "./Movie";

function Movies({ movies }) {
  console.log("movies in movies", movies);
  return (
    <ul>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default Movies;
