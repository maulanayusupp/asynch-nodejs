const request = require('request');

var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		var encodedAddress = encodeURIComponent(address);

		var params = {
			url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
			json: true
		};
		request(params, (error, response, body) => {
			if (error) {
				reject('Unable to connect to Google servers.');
			} else if(body.status === 'ZERO_RESULTS') {
				reject('Unabel to find that address.');
			} else if(body.status === 'OK') {
				resolve({
					address: body.results[0].formatted_address,
					lat: body.results[0].geometry.location.lat,
					lng: body.results[0].geometry.location.lng
				})
			}
		});
	})
};

geocodeAddress('19146').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage)
});