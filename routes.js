const Router = require("express").Router;

const {
  MovieSearchAndSortingController,
} = require("./src/controllers/question01");

const router = Router();

// 01 - Busca de Filmes e Ordenação
router.get("/search-and-sorting", (req, res) => {
  const controller = new MovieSearchAndSortingController();
  controller.handle(req, res);
});

// 02 - Contagem de Votos do Filme
router.get("/vote-count", (req, res) => {
  const controller = new FilmVoteCountController();
  controller.handle(req, res);
});

// 03 - Trailer do Filme
router.get("/movie-trailer", (req, res) => {
  const controller = new FilmTrailerController();
  controller.handle(req, res);
});

// 04 - Listagem de Filmes Populares
router.get("/popular-movies", (req, res) => {
  const controller = new PopularMoviesController();
  controller.handle(req, res);
});

// 05 - Listagem de Filmes por Gênero
router.get("/movies-by-genre", (req, res) => {
  const controller = new MoviesByGenreController();
  controller.handle(req, res);
});

// 06 - Busca de Filmes por Data de Lançamento
router.get("/movies-by-release-date", (req, res) => {
  const controller = new MoviesByReleaseDateController();
  controller.handle(req, res);
});

// 07 - Filmes em Alta
router.get("/top-movies", (req, res) => {
  const controller = new TopMoviesController();
  controller.handle(req, res);
});

module.exports = { router };
