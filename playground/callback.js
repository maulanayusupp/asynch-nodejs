var getUser = (id, callback) => {
	var user = {
		id: id,
		name: "Maulana Yusup Abdullah",
	};
	callback(user);
	console.log("Call Callback");

	setTimeout(()=>{
		console.log("Delay");
		callback(user);
	}, 3000);
};

getUser(31, (userObject) => {
	console.log("In Function Callback");
	console.log(userObject);
});