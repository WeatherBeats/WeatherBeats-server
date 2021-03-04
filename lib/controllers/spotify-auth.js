const { Router } = require('express');
const request = require('request'); // "Request" library
const superagent = require('superagent');
const querystring = require('querystring');
// const fetch = require('node-fetch');
// const { URLSearchParams } = require('url');

module.exports = Router()
//   .get('/test', (req, res) => {
//     res.redirect('http://www.google.com');
//   })

  .get('/login', (req, res) => {
    // your application requests authorization
    const scope = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope,
        redirect_uri: process.env.REDIRECT_URI,
      }));
  })
  
  .get('/callback', (req, res) => {
  
    const code = req.query.code || null;
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
      },
      json: true
    };
  
    request.post(authOptions, (error, response, body) => {
      if(!error && response.statusCode === 200) {
  
        const access_token = body.access_token,
          refresh_token = body.refresh_token;
  
        const options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };
  
        // use the access token to access the Spotify Web API
        request.get(options, (error, response, body) => {
          console.log(body);
        });
  
        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
            querystring.stringify({
              access_token,
              refresh_token
            }));
      } else {
        res.redirect('/#' +
            querystring.stringify({
              error: 'invalid_token'
            }));
      }
    });
  }
  )

  .get('/refresh_token', (req, res) => {

    // requesting access token from refresh token
    const refresh_token = req.query.refresh_token;
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: { 'Authorization': 'Basic ' + (new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')) },
      form: {
        grant_type: 'refresh_token',
        refresh_token
      },
      json: true
    };
  
    request.post(authOptions, (error, response, body) => {
      if(!error && response.statusCode === 200) {
        const access_token = body.access_token;
        res.send({
          access_token
        });
      }
    });
  })

//   .get('/login', (req, res) => {
//     res.redirect(`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}`);
//   })

//   .get('/callback', (req, res) => {
//     const params = new URLSearchParams();
//     params.append('grant_type', 'authorization_code');
//     params.append('code', req.query.code);
//     params.append('redirect_uri', process.env.REDIRECT_URI);
//     fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'authorization' : `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`
//       },
//       body: params
//     })
//       .then(res => res.json())
//       .then(json => {
//         res.redirect('https://accounts.spotify.com/authorize?' +
//       querystring.stringify({
//         response_type: 'code',
//         client_id: process.env.CLIENT_ID,
//         // scope,
//         redirect_uri: process.env.REDIRECT_URI,
//         // state
//       }));
//       });
//   });

// NOT USING SUPERAGENT ABOVE CURRENTLY
  .post('/api/v1/weather', async(req, res) => {
    try {
      const LAT = req.body.latitude;
      const LON = req.body.longitude;
          
      const URL = `https://api.weatherbit.io/v2.0/current?lat=${LAT}&lon=${LON}&key=${process.env.WEATHERBIT_API_KEY}&units=I`;
          
      const response = await superagent.get(URL);
      res.json(response.body);
    } catch(e) {
      res.status(500).json({ error: e.message });
    }
  });
