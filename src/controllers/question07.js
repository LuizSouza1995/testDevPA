const { TrendingMoviesService } = require("../services/question07");

class TrendingMoviesController {
  async handle(req, res) {
    const release_date_gte = req.query.release_date_gte;
    const trendingMoviesController = new TrendingMoviesService();
    const result = await trendingMoviesController.execute({
      release_date_gte,
    });

    if (!result) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json(result);
  }
}

module.exports = { TrendingMoviesController };
