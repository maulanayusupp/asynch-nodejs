const request = require('request');

var getWeather = (lat, lng, callback) => {
	var params = {
		url: `https://api.darksky.net/forecast/3a26f97998c81882eef4cbf0422fe9f5/${lat},${lng}`,
		json: true
	};
	request(params, (error, response, body) => {
		if (error) {
			callback('Unable to connect to Forecast.io servers.');
		} else if(response.statusCode === 400) {
			callback('Unable to fetch weather.');
		} else if(response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}
	});
};

module.exports.getWeather = getWeather;