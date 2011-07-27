exports.index = function (req, res){
  var vars = {title: 'Gazler'}
  do_response(req, res, vars);
}


exports.show = function (req, res){
  var vars = {title: 'Show Action'}
  do_response(req, res, vars);
}

function do_response(req, res, vars)
{

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

