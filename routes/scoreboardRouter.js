const express = require("express");
const router = express.Router();
const scoreController = require("../controllers/scoreboardController");

router.get("/scores", scoreController.getScores);

module.exports = router;
