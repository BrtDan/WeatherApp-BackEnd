const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// endpoint api
app.post("/api/get-weather", async (req, res) => {
  const { q: city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "Devi fornire il nome della città" });
  }

  try {
    const key = process.env.WEATHER_API_KEY;
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}`;

    const response = await axios.get(apiUrl);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "Errore durante la richiesta all'API",
      details: error.message,
    });
  }
});

app.get("/api/get-weather", async (req, res) => {
  const { q: city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "Devi fornire il nome della città" });
  }

  try {
    const key = process.env.WEATHER_API_KEY;
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}`;

    const response = await axios.get(apiUrl);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "Errore durante la richiesta all'API",
      details: error.message,
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});