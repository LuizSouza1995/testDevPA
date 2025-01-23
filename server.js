const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
require("express-async-errors");

const { router } = require("./routes");

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(PORT, async () => {
  console.info(`⚡️Server is running at http://localhost:${PORT}`);
});
