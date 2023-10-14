import React from "react";
import Movie from "./Movie";

function Movies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <Movie key={movie.movie_id} movie={movie} />
      ))}
    </ul>
  );
}

export default Movies;
