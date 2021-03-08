const { Router } = require('express');
const superagent = require('superagent');
const { weatherTranslator } = require('../../utils.js');
const { chosenWeatherTranslator } = require('../../utils.js');

module.exports = Router()

  .post('/', async(req, res) => {
    try {
      const LAT = req.body.latitude;
      const LON = req.body.longitude;
          
      const URL = `https://api.weatherbit.io/v2.0/current?lat=${LAT}&lon=${LON}&key=${process.env.WEATHERBIT_API_KEY}&units=I`;
          
      const response = await superagent.get(URL);
      res.json(weatherTranslator(response.body));
    } catch(e) {
      res.status(500).json({ error: e.message });
    }
  })

  .post('/chosen', async(req, res) => {
    try {
      const WEATHER = req.body.weather;
      res.json(chosenWeatherTranslator(WEATHER));
    } catch(e) {
      res.status(500).json({ error: e.message });
    }
  })
  
  .post('/zip', async(req, res) => {
    try {
      const ZIP = req.body.zipCode;
      const COUNTRY = req.body.country;
          
      const URL = `https://api.weatherbit.io/v2.0/current?postal_code=${ZIP}&country=${COUNTRY}&key=${process.env.WEATHERBIT_API_KEY}&units=I`;

      const response = await superagent.get(URL);
      res.json(weatherTranslator(response.body));
    } catch(e) {
      res.status(500).json({ error: e.message });
    }
  });
