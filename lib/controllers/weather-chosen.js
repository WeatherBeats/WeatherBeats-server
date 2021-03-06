const { Router } = require('express');
const { chosenWeatherTranslator } = require('../../utils.js');

module.exports = Router()

  .post('/api/v1/weather/chosen', async(req, res) => {
    try {
      const WEATHER = req.body.weather;
      res.json(chosenWeatherTranslator(WEATHER));
    } catch(e) {
      res.status(500).json({ error: e.message });
    }
  });
