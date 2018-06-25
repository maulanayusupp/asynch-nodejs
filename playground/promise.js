/*
	HTTP Requests does not support promise natively
 */

var asynchAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject("Arguments must be a numbers")
			}
		}, 1500);
	});
};

/* single */
asynchAdd(2,2).then((res) => {
	console.log('Single Result: ', res);
}, (errorMessage) => {
	console.log('Error:', errorMessage);
});

/* multiple */
asynchAdd(10,20).then((res) => {
	console.log('Multiple Result: ', res);
	return asynchAdd(res, 33);
}).then((res) => {
	console.log('Multiple New Result: ', res);
}).catch((errorMessage) => {
	console.log(errorMessage);
});


/*var somePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
	  // resolve('Hey. It worked!');
	  reject('Unable to fulfill promise')
	}, 1000)
});

somePromise.then((message) => {
	console.log('Success: ', message);
}, (errorMessage) => {
	console.log('Error:', errorMessage);
});
*/