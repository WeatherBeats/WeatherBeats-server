require('dotenv').config();
const express = require('express');
const app = express();
const request = require('superagent');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/api/v1/weather', async(req, res) => {
  try {
    const URL = `https://api.weatherbit.io/v2.0/current?lat=${process.env.LAT}&lon=${process.env.LON}&key=${process.env.WEATHERBIT_API_KEY}&units=I`;

    const response = await request.get(URL);
    res.json(response.body);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
