const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const { Router } = require('express');
const app = express();
var bodyParser = require('body-parser');
var createError = require('http-errors');

const pool = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nassim'
});

pool.connect(function (err) {
  if (err) throw err;

});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

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
/*
// http://localhost:3000/
app.get('/login', function(request, response) {
	// Render login template
  response.sendFile(path.join(__dirname + '/views/login.hbs'));
});
// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM utilisateur WHERE nom = ? AND mot_de_passe = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});
//search bar 
app.get('/explore', function(req, res) {
  pool.query('SELECT nom FROM produit WHERE nom LIKE "%' + req.query.term + '%"',
  function(err, rows, fields) {
  if (err) throw err;
  var data = [];
  for (i = 0; i < rows.length; i++) {
  data.push(rows[i].nom);
  }
  res.end(JSON.stringify(data));
  });
  });*/

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
app.listen(3000);