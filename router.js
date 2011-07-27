var routes = [];

exports.init = function(app) {
  for (var i in routes){
    controller = routes[i].controller;
    console.log(routes[i].route);
    for (var j in routes[i].paths){
      app[routes[i].paths[j].type](routes[i].paths[j].route, require('./controllers/'+controller+'_controller')[routes[i].paths[j].action]);
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

