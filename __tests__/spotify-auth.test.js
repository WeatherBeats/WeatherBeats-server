/* eslint-disable quotes */
const fs = require('fs');
// const pool = require('../lib/utils/pool.js');
const request = require('supertest');
const app = require('../lib/app.js');
const spotify = require('../lib/controllers/spotify-auth.js');

describe('spotify-auth app tests', () => {
  it('Checks if it returns the correct shapes', async () => {
    const res = await request(app)
      .post('/api/v1/weather')
      .send(
        {
          'latitude': '45.532471699999995',
          'longitude': '-122.68391039999999'
        }
      );
    expect(res.body).toBe(
      {
        "data": [
          {
            "rh": 52,
            "pod": "d",
            "lon": -122.68,
            "pres": 1015.9,
            "timezone": "America/Los_Angeles",
            "ob_time": "2021-03-04 19:36",
            "country_code": "US",
            "clouds": 100,
            "ts": 1614886560,
            "solar_rad": 115.3,
            "state_code": "OR",
            "city_name": "Portland",
            "wind_spd": 5.6,
            "wind_cdir_full": "southeast",
            "wind_cdir": "SE",
            "slp": 1017.3,
            "vis": 3.1,
            "h_angle": -15,
            "sunset": "02:02",
            "dni": 834.75,
            "dewpt": 35.5,
            "snow": 0,
            "uv": 4.99558,
            "precip": 0,
            "wind_dir": 140,
            "sunrise": "14:40",
            "ghi": 576.66,
            "dhi": 102.45,
            "aqi": 50,
            "lat": 45.51,
            "weather": {
              "icon": "c04d",
              "code": 804,
              "description": "Overcast clouds"
            },
            "datetime": "2021-03-04:19",
            "temp": 52.7,
            "station": "ODT10",
            "elev_angle": 35.17,
            "app_temp": 52.6
          }
        ],
        "count": 1
      }
    );
  });
});
