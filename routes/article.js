var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser')
var passport = require('passport');
var Article = require('../models/articlemodel.js');


// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// POST /login gets urlencoded bodies
router.post('/addArticle', function (req, res, done) {
    console.log('新增文章');
    var newArticle = new Article();
    newArticle.articleTitleTable = req.body.articleTitle;
    newArticle.articleBodyTable = req.body.articleBody;
    newArticle.articleAuthor = req.user.nickname;
    newArticle.save(function (err) {
    if (err) {  //angular,react,vue
        throw err;
    }
    return done(null);
    });
    // if (!req.body) return res.sendStatus(400)
    res.redirect('/home');
})


module.exports = router;