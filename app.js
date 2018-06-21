const request = require('request');
const yargs = require('yargs');

const argv  = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var encodedAddress = encodeURIComponent(argv.address);

var params = {
	url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
}
request(params, (error, response, body) => {
	if (error) {
		console.log('Unable to connect to Google servers.');
	} else if(body.status === 'ZERO_RESULTS') {
		console.log('Unabel to find that address.');
	} else if(body.status === 'OK') {
		console.log(JSON.stringify(body, undefined, 2));
	}

});