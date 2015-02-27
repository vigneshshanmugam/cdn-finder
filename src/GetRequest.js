module.exports = function(url) {
	return new Promise(function(resolve, reject) {
		var xhr;
        xhr = (typeof XMLHttpRequest !== "undefined") ? new XMLHttpRequest() : null;
        xhr = (typeof ActiveXObject!=="undefined") ? new ActiveXObject("Msxml2.XMLHTTP"): xhr;
        if(!xhr && !url){
            return;
        }
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				resolve(JSON.parse(xhr.responseText));
			}
		}
		xhr.open('GET', url, true);
		xhr.send();
	});
}