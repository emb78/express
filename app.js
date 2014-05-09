var express = require('express'),
    mustache = require('mustachex'),
    path = require('path'),
    app = express();

app.engine('html', mustache.express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.render('index',
    {
      layout: true,
      message: 'Things be pretty easy with express!'
    }
  );
});

var server = app.listen(3000);