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
router.post('/addArticle', function (req, res) {
    console.log('新增文章');
    var newArticle = new Article();
    newArticle.articleTitleTable = req.body.articleTitle;
    newArticle.articleBodyTable = req.body.articleBody;
    newArticle.articleID = req.user.username;
    newArticle.articleAuthor = req.user.nickname;
    newArticle.save(function (err) {
    if (err) {  //angular,react,vue
        throw err;
    }
        //return done(null); //Error: Can't set headers after they are sent. sent response end twice
    });
    // if (!req.body) return res.sendStatus(400)
    res.redirect('/home');
})
//刪除文章
router.get('/deleteArticle/:article_id',function (req, res) {
    console.log('刪除文章');
    Article.findByIdAndRemove(req.params.article_id, function(err){
    });
    res.redirect('/home');
})

module.exports = router;