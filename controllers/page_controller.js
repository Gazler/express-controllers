function PageController() {}

PageController.index = function(req, res) {
  var vars = {title: 'Index Action'};
  this.doResponse(req, res, vars);
}


PageController.show = function (req, res) {
    var vars = {title: 'Show Action'};
    this.doResponse(req, res, vars);
}

module.exports = PageController;

