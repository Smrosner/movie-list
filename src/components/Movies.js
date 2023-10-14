import React from "react";
import Movie from "./Movie";

function Movies({ movies }) {
  return (
    <>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <Movie key={String(movie.movie_id)} movie={movie} />
          ))}
        </ul>
      ) : (
        <p>Movie(s) not found</p>
      )}
    </>
  );
}

export default Movies;
