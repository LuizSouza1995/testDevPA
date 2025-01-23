const { ListOfFilmsByGenresService } = require("../services/question05");

class ListOfFilmsByGenreController {
  async handle(req, res) {
    const ListOfFilmsByGenreController = new ListOfFilmsByGenresService();
    const result = await ListOfFilmsByGenreController.execute();

    if (!result) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json(result);
  }
}

module.exports = { ListOfFilmsByGenreController };
