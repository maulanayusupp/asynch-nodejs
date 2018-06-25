const request = require('request');

var geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);

	var params = {
		url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	};
	request(params, (error, response, body) => {
		if (error) {
			callback('Unable to connect to Google servers.');
		} else if(body.status === 'ZERO_RESULTS') {
			callback('Unabel to find that address.');
		} else if(body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].formatted_address,
				lat: body.results[0].geometry.location.lat,
				lng: body.results[0].geometry.location.lng
			})
		}
	});
};

module.exports.geocodeAddress = geocodeAddress;