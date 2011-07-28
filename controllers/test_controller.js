function TestController() {}

TestController.index = function(req, res) {
  var vars = {title: 'Test Index'};
  this.doResponse(req, res, vars);
}


TestController.show = function (req, res) {
    var vars = {title: 'Test Show Action'};
    this.doResponse(req, res, vars);
}

module.exports = TestController;

