var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/name', function (req, res, next) {
  var person = {
    name: 'Ted',
    age: 600,
    country: 'Ghana',
    hometown: 'Accra'

  };
  var visitor = req.query;
  res.render('myname', {
    title: 'About me',
    me: person,
    visitor
  });
});

router.get('/assignment', function(req, res, next) {
  res.render('assignment', {title:'Sign up'});
});

router.post('/create-account', function(req, res, next){
  res.render('details', {title: "You are too moch", user: req.body})
});
module.exports = router;

 
