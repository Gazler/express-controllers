
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'mustache')
  app.register(".mustache", require('stache'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
var router = require('./router');

router.addPath('get', '/', 'page#index');
router.addPath('get', '/index(\.:format)?', 'page#index');
router.addPath('get', '/show(\.:format)?', 'page#show');
router.addPath('get', '/test/index(\.:format)?', 'test#index');
router.addPath('get', '/test/show(\.:format)?', 'test#show');
router.init(app);
app.listen(3000);

console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

