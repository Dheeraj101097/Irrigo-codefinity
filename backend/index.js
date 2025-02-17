const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//

let temperature = null;
let humidity = null;
let soilmoisture = null;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/data", (req, res) => {
  console.log("Data received:", req.body);
  temperature = req.body.temperature;
  humidity = req.body.humidity;
  soilmoisture = req.body.soil_moisture;
  // console.log(soilmoisture);

  res.status(200).json({ message: "Data received successfully" });
});

app.get("/data", (req, res) => {
  res.json({
    temperature: temperature,
    humidity: humidity,
    soilmoisture: soilmoisture,
  });
});
let command = 0;

app.post("/control", (req, res) => {
  console.log("Command received:", req.body);
  command = req.body.pump_status;
  res.status(200).json({ message: " control Data received successfully" });
});
app.get("/control", (req, res) => {
  res.json({ pump_status: command });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
