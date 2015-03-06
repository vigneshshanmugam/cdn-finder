var getResult = require('./src/GetRequest'),
	co = require('co'),
	cname = require('./src/cname');
	endpoint = "/findcdn?name=";

function handleResponse(response){
	var results = document.querySelectorAll('.result')[0];
	if(response){
		results.innerHTML = response;
	}
}

function addEvent(elem, event, fn) {
    if (elem.addEventListener) {
        elem.addEventListener(event, fn, false);
    } else {
        elem.attachEvent("on" + event, function() {
            return(fn.call(elem, window.event));   
        });
    }
}

var find = document.getElementById('#find');

addEvent(find,'click',onResultsHandler);

function onResultsHandler(e) {
	co(function *() {
		var name = endpoint + document.querySelectorAll('.domain')[0].value;
		var resp = yield getResult(name);
		return resp;
	}).then(handleResponse)
	.catch(function(err){
		console.log(err)
	})
}