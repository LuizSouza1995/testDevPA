const { FilmVoteCountService } = require("../services/question02");

class FilmVoteCountController {
  async handle(req, res) {
    const idFilm = req.query.idFilm;

    const filmVoteCountController = new FilmVoteCountService();
    const result = await filmVoteCountController.execute({
      idFilm,
    });

    if (!result) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json(result);
  }
}

module.exports = { FilmVoteCountController };
