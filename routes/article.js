var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser')
var passport = require('passport');


// // create application/json parser
// var jsonParser = bodyParser.json()
// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// // POST /login gets urlencoded bodies
// app.post('/addArticle', urlencodedParser, function (req, res) {
//     console.log("req.body.articleTitle")
//     if (!req.body) return res.sendStatus(400)
//     res.send('welcome, ' + req.body.username)
//     res.redirect('/home')
// })

router.post('/addArticle', function(req, res, next) {
    res.redirect('/home');
});

