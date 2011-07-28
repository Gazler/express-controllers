function BaseController() {}

BaseController.doResponse = function(req, res, vars) {
    switch (req.params.format)
    {
      case '.json':
        res.end(JSON.stringify(vars));
      break;
      default:
        res.render('index', vars);
      break;
    }
}

module.exports = BaseController;

