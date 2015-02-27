var getResult = require('./src/GetRequest'),
	co = require('co'),
	endpoint = "/findcdn?name=";

function handleResponse(response){
	var results = document.querySelectorAll('.result')[0];
	if(response){
		results.innerHTML = response;
	}
}

var find = document.getElementById('#find');
find.addEventListener('click' , function(e) {
	co(function *() {
		var name = endpoint + document.querySelectorAll('.domain')[0].value;
		var resp = yield getResult(name);
		return resp;
	}).then(handleResponse)
	.catch(function(err){
		console.log(err)
	})
});