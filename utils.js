function weatherTranslator(weather) {

  const dict = {
    't101d': 'gloomy',
    't101n': 'gloomy',
    't102d': 'angry',
    't102n': 'angry',
    't103d': 'angry',
    't103n': 'angry',
    't104d': 'gloomy',
    't104n': 'gloomy',
    't105d': 'hard',
    't105n': 'hard',
    'd01d': 'meditation',
    'd01n': 'meditation',
    'd02d': 'relaxing',
    'd02n': 'relaxing',
    'd03d': 'mellow',
    'd03n': 'mellow',
    'r01d': 'mellow',
    'r01n': 'mellow',
    'r02d': 'chill',
    'r02n': 'chill',
    'r03d': 'gloomy',
    'r03n': 'gloomy',
    'f01d': 'peril',
    'f01n': 'peril',
    'r04d': 'soothing',
    'r04n': 'soothing',
    'r05d': 'soothing',
    'r05n': 'soothing',
    'r06d': 'angry',
    'r06n': 'angry',
    's01d': 'peaceful',
    's01n': 'peaceful',
    's02d': 'dreamy',
    's02n': 'dreamy',
    's03d': 'blizzard',
    's03n': 'blizzard',
    's04d': 'freezing',
    's04n': 'freezing',
    's05d': 'freezing',
    's05n': 'freezing',
    's06d': 'alpine',
    's06n': 'alpine',
    'a01d': 'misty',
    'a01n': 'misty',
    'a02d': 'smoke',
    'a02n': 'smoke',
    'a03d': 'hazy',
    'a03n': 'hazy',
    'a04d': 'sandstorm',
    'a04n': 'sandstorm',
    'a05d': 'foggy',
    'a05n': 'foggy',
    'a06d': 'foggy',
    'a06n': 'foggy',
    'c01d': 'upbeat',
    'c01n': 'upbeat',
    'c02d': 'happy',
    'c02n': 'happy',
    'c03d': 'carefree',
    'c03n': 'carefree',
    'c04d': 'overcast',
    'c04n': 'overcast',
    'u00d': 'rainy tacos',
    'u00n': 'rainy tacos'
  };

  const searchTerm = Object.getOwnPropertyDescriptor(dict, weather.data[0].weather.icon);

  return searchTerm.value;
}

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
  chosenWeatherTranslator, weatherTranslator
};
