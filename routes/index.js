var express = require('express');
var router = express.Router();
var passport = require('passport');
var Article = require('../models/articlemodel.js');

//get product from article db
var productlist = {};



router.get('/', function (req, res, next) {
  res.render('index', { message: req.flash('info') });
});
router.get('/home', function (req, res, next) {
  console.log('首頁');
  Article.find(function(err,goods) {
  if (err) {
    throw err;
  }else {
    productlist = goods;
  }
  res.render('home', { articleinform: productlist, user: req.user, loginStatus: req.isAuthenticated() })
});

});

router.get('/test',function(req,res,next){res.render('home', { articleinform: productlist, user: req.user, loginStatus: true });
});

//登入頁
router.post('/signin', passport.authenticate('login', {
  successRedirect: '/home',
  failureRedirect: '/',
  failureFlash: true
}));
router.get('/getsignup', function (req, res, next) {
  res.render('signup', { message: req.flash('info') });
}); 
//註冊頁
router.post('/postsignup',passport.authenticate('ppsignup', {
  
  failureRedirect: '/getsignup',
  failureFlash: true
}),function(req,res){
  console.log("dasdadadaddada")
  
  return res.redirect('/home');
});




// router.post('/postsignup',function(req,res,next){
//   console.log(req);
//   console.log("aaaa");
// });




router.get('/signout', function (req, res, next) {
  req.logout()
  res.redirect('/')
});

module.exports = router;