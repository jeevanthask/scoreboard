const db = require("../util/database");

class ScoreBoard {
  constructor(team_name, score) {
    this.team_name = team_name;
    this.score = score;
  }

  static fetchAllTeams() {
    return db.execute("SELECT * FROM team_scores");
  }
}

module.exports = ScoreBoard;
