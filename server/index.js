const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const db = require("./queries.js");

const PORT = 3001 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(express.static("dist"));

app.get("/movies", db.getMovies);
app.get("/movies/:id", db.getMovie);
app.post("/movies", db.createMovie);
app.put("/movies/:id", db.updateMovie);
app.delete("/movies/:id", db.deleteMovie);

app.get("/", (req, res) => {
  res.send("Hello from server port 3001");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
