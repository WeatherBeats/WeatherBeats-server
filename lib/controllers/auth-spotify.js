const { Router } = require('express');
const request = require('express');
const querystring = require('querystring');


const CLIENT_ID = '001157066fa3467e8ba9080a29343b6e';
const REDIRECT_URI = 'http://localhost:8888/callback';
const CLIENT_SECRET = '2653d71d812148968668254d61e0ac37';

module.exports = Router()
  .get('login', (req, res) => {
    // const scope = 'user-read-private user-read-email';
    res.redirect(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`);
  })
  //   res.redirect('https://accounts.spotify.com/authorize?' +
  //   querystring.stringify({
  //     response_type: 'code',
  //     client_id: process.env.CLIENT_ID,
  //     scope,
  //     redirect_uri: process.env.REDIRECT_URI
  //   }));
  // })

  .get('callback', (req, res) => {
    const code = req.query.code || null;

    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}` 
      },
      json: true
    };

    request.post(authOptions, (error, response, body) => {
      if(!error && response.statusCode === 200) {
        const access_token = body.access_token;
        const refresh_token = body.refresh_token;

        const options = {
          url: 'https://api.spotify/com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        request.get(options, (error, response, body) => {
          console.log(refresh_token);
        });

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
  });


