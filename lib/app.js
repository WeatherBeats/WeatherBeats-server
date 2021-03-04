const express = require('express'); // Express web server framework
const request = require('request'); // "Request" library
const cors = require('cors');
const cookieParser = require('cookie-parser');

const client_secret = '2653d71d812148968668254d61e0ac37'; // Your secret

const app = express();

app.use(express.static(__dirname + '/public'))
  .use(cors())
  .use(cookieParser());

app.use('/', require('./controllers/spotify-auth'));


console.log('Listening on 8888');
app.listen(8888);
