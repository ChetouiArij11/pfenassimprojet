const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const path = require('path');

var mysql = require('mysql');

var pool = mysql.createConnection({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "nassim",
  port: '3200'
});

pool.connect(function (err) {
  if (err) throw err;

});

app.use(express.static('public'));

const hbs = handlebars.create({
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');
// Routes

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

app.get('/profile', function (req, res) {
  res.render("profile", {
    layout: 'main'
  });
});

app.get('/add', function (req, res) {
  res.render("add_article", {
    layout: 'main'
  });
});

app.get('/product', function (req, res) {
  res.render("product", {
    layout: 'main'
  });
});

app.get('/explore', function (req, res) {
  res.render("explore", {
    layout: 'main'
  });
});

app.get('/header', function (req, res) {
  res.render("header", {
    layout: 'main'
  });
});

app.get('/footer', function (req, res) {
  res.render("footer", {
    layout: 'main'
  });
});

app.get('/autrecommande', function (req, res) {
  res.render("autrecomm", {
    layout: 'main'
  });
});
app.get('/mescommande', function (req, res) {
  res.render("mescomm", {
    layout: 'main'
  });
});

app.listen(3200);