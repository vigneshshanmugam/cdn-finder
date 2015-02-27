var koa = require('koa'),
	app = koa(),
	logger = require('koa-logger'),
	route = require('koa-route'),
	staticDir = require('koa-static'),
	request = require('co-request'),
	port = process.env.PORT || 3000,
	dns = require('dns');

app.use(logger());

app.use(route.get('/findcdn', findCDN))
app.use(staticDir('./'))

app.listen(port, function() {
	console.log("Koa server listening on port %s", port);
});

function *findCDN() {
	domain = this.request.query.name;
	console.log(domain);
	if(domain){
		var resp = yield new Promise(function(resolve, reject) {
			dns.resolve(domain, function(err, address) {
				if(err) reject(err);
				else resolve(address);
			})
		});
		console.log(resp);
		this.body = resp;
	}

}