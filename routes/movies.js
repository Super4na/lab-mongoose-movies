const router = require("express").Router();
const Celebrity = require("../models/Celebrity-model");
const Movie = require("../models/Movie.model");

router.get("/movies/new", async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("movies/new", { celebrities });
  } catch (e) {
    console.log("Error", e);
  }
});

router.post("/movies/new", async (req, res) => {
  const { title, genre, plot, cast } = req.body;
  try {
    await Movie.create({ title, genre, plot, cast });
    res.redirect("/movies");
  } catch (e) {
    console.log("Error", e);
  }
});

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();

    res.render("movies/index", { movies });
  } catch (e) {
    console.log("Error", e);
  }
});

router.get("/movies/:moviesId", async (req, res) => {
  try {
    const movies = await Movie.findById(req.params.moviesId);
    res.render("movies/show", movies);
  } catch (e) {
    console.log("Error", e);
  }
});

router.get("/movies/:moviesId/edit", async (req, res) => {
  try {
    const movies = await Movie.findById(req.params.moviesId);
    const casts = await Celebrity.find();
    res.render("movies/edit", { movies, casts });
  } catch (e) {
    console.log("Error", e);
  }
});

router.post("/movies/:moviesId/edit", async (req, res) => {
  const { title, genre, plot, cast } = req.body;
  try {
    await Movie.findByIdAndUpdate(req.params.moviesId, {
      title,
      genre,
      plot,
      cast,
    });

    res.redirect(`/movies/${req.params.moviesId}`);
  } catch (e) {
    console.log("Error", e);
  }
});

router.post("/movies/:moviesId/delete", async (req, res) => {
  try {
    await Movie.findByIdAndRemove(req.params.moviesId);
    res.redirect("/movies");
  } catch (e) {
    console.log("Error", e);
  }
});

module.exports = router;
