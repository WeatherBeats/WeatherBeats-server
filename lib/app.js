const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());

app.use(express.static(__dirname + '/public'))
  .use(cors())
  .use(cookieParser());

app.use('/', require('./controllers/spotify-auth'));
app.use('/api/v1/weather', require('./controllers/weather'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;


