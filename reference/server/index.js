const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 5000;

app.use(cors());

app.listen(PORT, () => console.log(`Listening to the port ${PORT}`));

app.get("/", (req, res) => {
  res.send({ message: "This is the Text from express server,GET method" });
  console.log("GET method called");
});

app.post("/", async (req, res) => {
  const body = req.body;

  res.send({ message: "Data saved" });
  console.log(body);
});
