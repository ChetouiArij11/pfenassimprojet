const express = require('express');
const handlebars = require('express-handlebars');

const app = express();





const hbs = handlebars.create({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render("index", {
    layout: 'main'
  });
});

app.get('/login', function (req, res) {
  res.render("login", {
    layout: 'main'
  });
});
app.get('/footer', function (req, res) {
  res.render("footer", {
    layout: 'main'
  });
});
app.listen(3000);