const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "xxzz",
  host: "localhost",
  port: 5432,
  database: "movielist",
});

const getMovies = async (req, res) => {
  try {
    const allMovies = await pool.query("SELECT * FROM movies");
    res.status(200).json(allMovies.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await pool.query("SELECT * FROM movies WHERE movie_id = $1", [
      id,
    ]);
    res.status(200).json(movie.rows[0]);
  } catch (err) {
    console.err(err.message);
    res.status(500).send("Server error");
  }
};

const createMovie = async (req, res) => {
  const { title } = req.body;
  try {
    const newMovie = await pool.query(
      "INSERT INTO movies (title) VALUES ($1) RETURNING *",
      [title]
    );
    res.status(201).json({ data: newMovie.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const editMovie = await pool.query(
      "UPDATE movies SET title = $1 WHERE movie_id = $2",
      [title, id]
    );
    res
      .status(200)
      .json(`Movie modified with movie_id: ${id} and title: ${title}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const removeMovie = await pool.query(
      "DELETE FROM movies WHERE movie_id = $1",
      [id]
    );
    res.status(200).json(`Deleted movie with movie_id: ${id}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
};
