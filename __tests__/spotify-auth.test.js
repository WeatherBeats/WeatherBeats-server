/* eslint-disable quotes */
require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app.js');
const superagent = require('superagent');

// jest.mock("superagent");

describe('spotify-auth weather routes app tests', () => {
  it('Checks if it returns the correct shapes', () => {
    superagent.get = jest.fn(() => Promise.resolve({}));
    return request(app)
      .post('/api/v1/weather')
      .send(
        {
          'latitude': '45.532471699999995',
          'longitude': '-122.68391039999999'
        }
      )
      .then(() => {
        expect(superagent.get).toHaveBeenCalledWith(`https://api.weatherbit.io/v2.0/current?lat=45.532471699999995&lon=-122.68391039999999&key=${process.env.WEATHERBIT_API_KEY}&units=I`);
      });
  });
});
