const request = require('request');

var params = {
	url: "http://maps.googleapis.com/maps/api/geocode/json?address=Bandung",
	json: true
}
request(params, (error, response, body) => {
	console.log(body);
});