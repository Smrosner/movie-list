import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import Search from "./components/Search";
import AddMovie from "./components/AddMovie";
import DarkToggle from "./components/DarkToggle";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [movies, setMovies] = useState([]);
  const [addMovie, setAddMovie] = useState("");
  const [moviePresentMessage, setMoviePresentMessage] = useState("");
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addsMovies = (addMovie) => {
    const movieAlreadyPresent = movies.some(
      (movie) => movie.title.toLowerCase() === addMovie.toLowerCase()
    );

    if (!movieAlreadyPresent) {
      const addId = movies.length + 1;
      addMovie && setMovies([{ title: addMovie, id: addId }, ...movies]);
      setMoviePresentMessage("");
    } else {
      setMoviePresentMessage("This Movie is Already Listed");
      setTimeout(() => {
        setMoviePresentMessage("");
      }, 2000);
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchMovie.toLowerCase())
  );

  return (
    <div className={`App ${theme}`}>
      <h1>MovieList</h1>
      <DarkToggle theme={theme} setTheme={setTheme} />
      <AddMovie
        addMovie={addMovie}
        setAddMovie={setAddMovie}
        addsMovies={addsMovies}
      />
      {moviePresentMessage && (
        <p>
          <i>{moviePresentMessage}</i>
        </p>
      )}
      <Search
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        movies={movies}
      />
      {filteredMovies.length > 0 ? (
        <Movies movies={filteredMovies} />
      ) : (
        <p>Movie(s) not found</p>
      )}
    </div>
  );
}

export default App;
