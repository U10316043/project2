var express = require('express');
var router = express.Router();
var passport = require('passport');
router.get('/', function (req, res, next) {
  res.render('index', { message: req.flash('info') });
});
router.get('/home', function (req, res, next) {
  res.render('home', { user: req.user, loginStatus: req.isAuthenticated() })
});
//登入頁
router.post('/signin', passport.authenticate('login', {
  successRedirect: '/home',
  failureRedirect: '/',
  failureFlash: true
}));
router.get('/signup', function (req, res, next) {
  res.render('signup', { message: req.flash('info') });
});
//註冊頁
router.post('/signup', passport.authenticate('signup', {
  successRedirect: '/home',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.get('/signout', function (req, res, next) {
  req.logout()
  res.redirect('/')
});

module.exports = router;