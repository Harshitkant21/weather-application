const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/weather/:city", async (req, res) => {
  const { city } = req.params;
  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
    );
    const weatherData = response.data;

    // Convert temperature from Kelvin to Celsius
    weatherData.main.temp = (weatherData.main.temp - 273.15).toFixed(2);
    weatherData.main.feels_like = (
      weatherData.main.feels_like - 273.15
    ).toFixed(2);
    weatherData.main.temp_min = (weatherData.main.temp_min - 273.15).toFixed(2);
    weatherData.main.temp_max = (weatherData.main.temp_max - 273.15).toFixed(2);

    res.json(weatherData);
  } catch (error) {
    if (error.response) {
      res
        .status(error.response.status)
        .json({ message: error.response.data.message });
    } else {
      res.status(500).json({ message: "Error fetching weather data" });
    }
  }
});

app.get("/api/:city", async (req, res) => {
  const { city } = req.params;
  const apiKey = process.env.GEO_API_KEY;
  try {
    const respose = await axios.get(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${city}&apiKey=${apiKey}`
    );
    res.json(respose.data);
  } catch (error) {
    if (error.response) {
      res
        .status(error.response.status)
        .json({ message: error.response.data.message });
    } else {
      res.status(500).json({ message: "Error fetching City" });
    }
  }
});

app.get("/api/location", async (req, res) => {
  const apiKey = process.env.GEO_API_KEY;
  try {
    const response = await axios.get(
      `https://api.geoapify.com/v1/ipinfo?&apiKey=${apiKey}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res
        .status(error.response.status)
        .json({ message: error.response.data.message });
    } else {
      res.status(500).json({ message: "Error fetching location" });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
