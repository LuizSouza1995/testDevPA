const { MovieTrailerService } = require("../services/question03");

class MovieTrailerController {
  async handle(req, res) {
    const idFilm = req.query.idFilm;

    const movieTrailerController = new MovieTrailerService();
    const result = await movieTrailerController.execute({
      idFilm,
    });

    if (!result) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json(result);
  }
}

module.exports = { MovieTrailerController };
