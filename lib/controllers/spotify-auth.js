const { Router } = require('express');
const request = require('request');
const querystring = require('querystring');

module.exports = Router()

  .get('/login', (req, res) => {
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
        
        res.redirect(`https://weatherbeats.netlify.app/player/${access_token}/${refresh_token}`);
      } else {
        res.redirect('https://weatherbeats.netlify.app/player/' +
            querystring.stringify({
              error: 'invalid_token'
            }));
      }
    });
  })

  .get('/refresh_token', (req, res) => {

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
  });
