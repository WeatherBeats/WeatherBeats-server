/* eslint-disable quotes */
// const fs = require('fs');
// const pool = require('../lib/utils/pool.js');
const request = require('supertest');
const app = require('../lib/app.js');
// const spotify = require('../lib/controllers/spotify-auth.js');

describe('spotify-auth weather routes app tests', () => {
  it('Checks if it returns the correct shapes', async () => {
    const res = await request(app)
      .post('/api/v1/weather')
      .send(
        {
          'latitude': '45.532471699999995',
          'longitude': '-122.68391039999999'
        }
      );
    console.log(res.body);
    expect(res.body).toEqual(
      {
        "data": [
          {
            "rh": expect.any(Number),
            "pod": expect.any(String),
            "lon": expect.any(Number),
            "pres": expect.any(Number),
            "timezone": expect.any(String),
            "ob_time": expect.any(String),
            "country_code": expect.any(String),
            "clouds": expect.any(Number),
            "ts": expect.any(Number),
            "solar_rad": expect.any(Number),
            "state_code": expect.any(String),
            "city_name": expect.any(String),
            "wind_spd": expect.any(Number),
            "wind_cdir_full": expect.any(String),
            "wind_cdir": expect.any(String),
            "slp": expect.any(Number),
            "vis": expect.any(Number),
            "h_angle": expect.any(Number),
            "sunset": expect.any(String),
            "dni": expect.any(Number),
            "dewpt": expect.any(Number),
            "snow": expect.any(Number),
            "uv": expect.any(Number),
            "precip": expect.any(Number),
            "wind_dir": expect.any(Number),
            "sunrise": expect.any(String),
            "ghi": expect.any(Number),
            "dhi": expect.any(Number),
            "aqi": expect.any(Number),
            "lat": expect.any(Number),
            "weather": {
              "icon": expect.any(String),
              "code": expect.any(Number),
              "description": expect.any(String)
            },
            "datetime": expect.any(String),
            "temp": expect.any(Number),
            "station": expect.any(String),
            "elev_angle": expect.any(Number),
            "app_temp": expect.any(Number)
          }
        ],
        "count": 1
      });
  });
});
