var http = require('http'),
    koa = require('koa'),
    logger = require('koa-logger'),
    route = require('koa-route'),
    path = require('path'),
    serve = require('koa-static');

// Create koa app
var app = koa();

var routes = require('./routes/route')();

// middleware
app.use(logger());
app.use(serve(path.join(__dirname , '/public')));
app.use(route.get('/', routes.index));


var server = http.Server(app.callback());

//enable chat service
require('./lib/chat')(server);

server.listen('1234', function (argument) {
	console.log('Server started at 1234...');
})