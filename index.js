var getResult = require('./src/GetRequest'),
	co = require('co'),
	findCDN = require('./src/findCDN'),
	endpoint = "/findcdn?name=",
	result = document.querySelectorAll('.result')[0];

function handleResponse(response){
	var cdn;
	if(response.length > 0){
		cdn = findCDN(response);
		if(cdn){
			result.style.color = 'green';
			result.innerHTML = cdn;
		}else{
			handleError();
		}
	}
}

function handleError(err){
	result.style.color = 'red';
	result.innerHTML = "Doesn't look like a valid CDN domain. Please check!";
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

var find = document.getElementById('find');

addEvent(find,'click',onResultsHandler);

function onResultsHandler(e) {
	co(function *() {
		var domainName = document.querySelectorAll('.domain')[0].value
		var name = endpoint + domainName.replace(/.*?:\/\//g, "");;
		var resp = yield getResult(name);
		return resp;
	}).then(handleResponse, handleError)
}