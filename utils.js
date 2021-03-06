function weatherTranslator(weather) {

  const dict = {
    't101d': 'country',
    't101n': 'country',
    't102d': 'country',
    't102n': 'country',
    't103d': 'country',
    't103n': 'country',
    't104d': 'country',
    't104n': 'country',
    't105d': 'country',
    't105n': 'country',
    'd01d': 'mellow',
    'd01n': 'mellow',
    'd02d': 'mellow',
    'd02n': 'mellow',
    'd03d': 'mellow',
    'd03n': 'mellow',
    'r01d': 'mellow',
    'r01n': 'mellow',
    'r02d': 'mellow',
    'r02n': 'mellow',
    'r03d': 'mellow',
    'r03n': 'mellow',
    'f01d': 'mellow',
    'f01n': 'mellow',
    'r04d': 'mellow',
    'r04n': 'mellow',
    'r05d': 'mellow',
    'r05n': 'mellow',
    'r06d': 'mellow',
    'r06n': 'mellow',
    's01d': 'christmas',
    's01n': 'christmas',
    's02d': 'christmas',
    's02n': 'christmas',
    's03d': 'christmas',
    's03n': 'christmas',
    's04d': 'christmas',
    's04n': 'christmas',
    's05d': 'christmas',
    's05n': 'christmas',
    's06d': 'christmas',
    's06n': 'christmas',
    'a01d': 'edm',
    'a01n': 'edm',
    'a02d': 'edm',
    'a02n': 'edm',
    'a03d': 'edm',
    'a03n': 'edm',
    'a04d': 'edm',
    'a04n': 'edm',
    'a05d': 'edm',
    'a05n': 'edm',
    'a06d': 'edm',
    'a06n': 'edm',
    'c01d': 'party',
    'c01n': 'party',
    'c02d': 'party',
    'c02n': 'party',
    'c03d': 'party',
    'c03n': 'party',
    'c04d': 'party',
    'c04n': 'party',
    'u00d': 'jazz',
    'u00n': 'jazz'
  };

  const searchTerm = Object.getOwnPropertyDescriptor(dict, weather.data[0].weather.icon);

  return searchTerm.value;
}

module.exports = {
  weatherTranslator
};


function chosenWeatherTranslator(weather) {

  const dict = {
    'sunny': 'party',
    'cloudy': 'mellow',
    'thunder': 'edm',
    'rain': 'jazz',
    'freezing-rain': 'house',
    'snow': 'christmas',
    'hazy': 'classical'
  };

  const searchTerm = Object.getOwnPropertyDescriptor(dict, weather);

  return searchTerm.value;
}

module.exports = {
  chosenWeatherTranslator
};
