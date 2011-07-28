var routes = [];

exports.init = function(app) {
  for (var i in routes){
    controller = routes[i].controller;
    for (var j in routes[i].paths){
      var bc = require('./base_controller');
      var c = require('./controllers/'+controller+'_controller');
      c.__proto__ = bc;
      var path = routes[i].paths[j];

      callback = (function(req, res) {
        var action = path.action;
        var cont = c;
        return function(req, res) {
            cont[action](req, res);
        }
      })();

      app[path.type](path.route, callback);
    }
  }
  return this;
}


exports.addPath = function(type, route, controllerAction) {
  controllerAction = controllerAction.split('#');
  var controller = controllerAction[0];
  var action = controllerAction[1];

  var position = null;
  for (var i in routes)
  {
    if (routes[i].controller == controller)
    {
        position = i;
        break;
    }
  }

  if (!position)
  {
    routes.push({controller: controller, paths: []});
    position = routes.length - 1;
  }

  routes[position].paths.push({route: route, action: action, type: type});
}

