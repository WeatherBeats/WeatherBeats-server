require('dotenv').config();
const express = require('express');
const app = express();
const request = require('superagent');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/api/v1/weather', async (req, res) => {
  try {
    const LAT = req.body.latitude;
    const LON = req.body.longitude;

    const URL = `https://api.weatherbit.io/v2.0/current?lat=${LAT}&lon=${LON}&key=${process.env.WEATHERBIT_API_KEY}&units=I`;

    const response = await request.get(URL);
    res.json(response.body);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/v1/weather', async (req, res) => {
  try {
    const LAT = req.body.latitude;
    const LON = req.body.longitude;

    const URL = `https://api.weatherbit.io/v2.0/current?lat=${LAT}&lon=${LON}&key=${process.env.WEATHERBIT_API_KEY}&units=I`;

    const response = await request.get(URL);
    res.json(response.body);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

  request.post(authOptions, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.send({
        access_token
      });
    }
  });
});

console.log('Listening on 8888');
app.listen(8888);
