const { Router } = require('express');
const superagent = require('superagent');
const { weatherTranslator } = require('../../utils.js');

module.exports = Router()

  .post('/api/v1/weather', async(req, res) => {
    try {
      const LAT = req.body.latitude;
      const LON = req.body.longitude;
          
      const URL = `https://api.weatherbit.io/v2.0/current?lat=${LAT}&lon=${LON}&key=${process.env.WEATHERBIT_API_KEY}&units=I`;
          
      const response = await superagent.get(URL);
      res.json(weatherTranslator(response.body));
    } catch(e) {
      res.status(500).json({ error: e.message });
    }
  });
