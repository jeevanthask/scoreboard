const express = require("express");
const app = express();
const port = process.env.PORT | 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome server!");
});

app.listen(port, () => console.log(`listening in port ${port}`));
