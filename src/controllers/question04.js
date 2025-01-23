const { ListOfPopularMoviesService } = require("../services/question04");

class ListOfPopularMoviesController {
  async handle(req, res) {
    const listOfPopularMoviesServiceController =
      new ListOfPopularMoviesService();
    const result = await listOfPopularMoviesServiceController.execute();

    if (!result) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json(result);
  }
}

module.exports = { ListOfPopularMoviesController };
