const { MovieSearchByReleaseDateService } = require("../services/question06");

class MovieSearchByReleaseDateController {
  async handle(req, res) {
    const release_date_gte = req.query.release_date_gte;
    const movieSearchByReleaseDateController =
      new MovieSearchByReleaseDateService();
    const result = await movieSearchByReleaseDateController.execute({
      release_date_gte,
    });

    if (!result) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json(result);
  }
}

module.exports = { MovieSearchByReleaseDateController };
