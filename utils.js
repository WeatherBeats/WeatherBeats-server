function weatherTranslator(weather) {

  const dict = {
    't101d': 'gloomy',
    't101n': 'gloomy+night',
    't102d': 'angry',
    't102n': 'angry+night',
    't103d': 'angry',
    't103n': 'angry+night',
    't104d': 'gloomy',
    't104n': 'gloomy+night',
    't105d': 'hard',
    't105n': 'hard+night',
    'd01d': 'meditation',
    'd01n': 'meditation+night',
    'd02d': 'relaxing',
    'd02n': 'relaxing+night',
    'd03d': 'mellow',
    'd03n': 'mellow+night',
    'r01d': 'mellow',
    'r01n': 'mellow+night',
    'r02d': 'chill',
    'r02n': 'chill+night',
    'r03d': 'gloomy',
    'r03n': 'gloomy+night',
    'f01d': 'peril',
    'f01n': 'peril+night',
    'r04d': 'soothing',
    'r04n': 'soothing+night',
    'r05d': 'soothing',
    'r05n': 'soothing+night',
    'r06d': 'angry',
    'r06n': 'angry+night',
    's01d': 'peaceful',
    's01n': 'peaceful+night',
    's02d': 'dreamy',
    's02n': 'dreamy+night',
    's03d': 'blizzard',
    's03n': 'blizzard+night',
    's04d': 'freezing',
    's04n': 'freezing+night',
    's05d': 'freezing',
    's05n': 'freezing+night',
    's06d': 'alpine',
    's06n': 'alpine+night',
    'a01d': 'misty',
    'a01n': 'misty+night',
    'a02d': 'smoke',
    'a02n': 'smoke+night',
    'a03d': 'hazy',
    'a03n': 'hazy+night',
    'a04d': 'sandstorm',
    'a04n': 'sandstorm+night',
    'a05d': 'foggy',
    'a05n': 'foggy+night',
    'a06d': 'foggy',
    'a06n': 'foggy+night',
    'c01d': 'upbeat',
    'c01n': 'upbeat+night',
    'c02d': 'happy',
    'c02n': 'happy+night',
    'c03d': 'carefree',
    'c03n': 'carefree+night',
    'c04d': 'overcast',
    'c04n': 'overcast+night',
    'u00d': 'rainy+tacos',
    'u00n': 'rainy+tacos+night'
  };

  const searchTerm = dict[weather.data[0].weather.icon];

  return searchTerm;
}

function chosenWeatherTranslator(weather) {

  const dict = {
    'sunny': 'upbeat',
    'cloudy': 'overcast',
    'thunder': 'angry',
    'rain': 'mellow',
    'freezing-rain': 'peril',
    'snow': 'dreamy',
    'hazy': 'hazy'
  };

  const searchTerm = dict[weather];

  return searchTerm;
}

module.exports = {
  chosenWeatherTranslator, weatherTranslator
};
