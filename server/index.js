const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const db = require("./db");

const PORT = 3001 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(express.static("dist"));

// ROUTES
app.post("/movies", db.createMovie); // create movie
app.get("/movies", db.getMovies); // get all movies
app.get("/movies/:id", db.getMovie); //  get a movie
app.put("/movies/:id", db.updateMovie); // update a movie
app.delete('/movies/:id', db.deleteMovie) // delete a movie

app.get("/", (req, res) => {
  res.send("Hello from server port 3001");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
