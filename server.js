var koa = require('koa'),
	app = koa(),
	logger = require('koa-logger'),
	route = require('koa-route'),
	staticDir = require('koa-static'),
	request = require('co-request'),
	port = process.env.PORT || 3003;

app.use(logger());
app.use(route.get('/cdnfinder/:name', findCDN))
app.use(staticDir('./'))

app.listen(port, function() {
	console.log("Koa server listening on port %s", port);
});

function *findCDN(domain) {
	if(domain){

		
	}
	// switch(domain) {
	// 	case "location":
	// 		var resp = yield request('http://api.open-notify.org/iss-now.json');
	// 		this.body = resp.body;
	// 		break;
	// 	default:
	// 		console.log("Unknown");
	// 		this.body = "[]";
	// }
}