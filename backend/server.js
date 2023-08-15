const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//allow requests from any origin
app.use(cors());

app.get("/test", (req, res) => {
  console.log("Received GET request:", req.query);//console
  res.json({ message: "GET request received successfully" });//page
});

app.post("/test1", (req, res) => {
  console.log("Received POST request:", req.body);//console
  res.json({ message: "POST request received successfully" });//page
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);//console starting port number
});
