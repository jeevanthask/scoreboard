const ScoreBoard = require("../models/ScoreBoard");
const io = require("../socket");

exports.getScores = (req, res) => {
  ScoreBoard.fetchAllTeams()
    .then(([scores, filedData]) => {
      io.getIo().emit("posts", {
        action: "hey I am coming from backend!!",
      });

      res.send(scores);
    })
    .catch((error) => {
      res.send(error);
    });
};
