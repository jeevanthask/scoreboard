const express = require("express");
const app = express();
const port = process.env.PORT | 3000;
const cors = require("cors");
const scoreRoute = require("./routes/scoreboardRouter");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome server!");
});

app.use("/api", scoreRoute);

const server = app.listen(port, () => console.log(`listening in port ${port}`));

const io = require("./socket").init(server);

// const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("client connected");
});
