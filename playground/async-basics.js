console.log("Starting App");

var delay = 2000;

setTimeout(() => {
	console.log("inside of callback");
}, delay)

setTimeout(() => {
	console.log("inside of no delay");
}, 0)

console.log("Finishing Up");