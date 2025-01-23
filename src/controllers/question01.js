const { MovieSearchAndSortingService } = require("../services/question01");

class MovieSearchAndSortingController {
  async handle(req, res) {
    const query = req.query.query;

    const movieSearchAndSortingController = new MovieSearchAndSortingService();
    const result = await movieSearchAndSortingController.execute({
      query,
    });

    if (!result) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json(result);
  }
}

module.exports = { MovieSearchAndSortingController };
