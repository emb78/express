var express = require('express'),
    mustache = require('mustachex'),
    app = express();

app.engine('html', mustache.express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index',
    {
      layout: true,
      message: 'Things be pretty easy with express!'
    }
  );
});

var server = app.listen(3000);