const express = require("express");
const app = express();
const cors = require("cors");
const port = 4020;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("start work on " + port);
});
