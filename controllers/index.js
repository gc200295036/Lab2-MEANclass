// use express dependency and its Routing feature to parse url's
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brazda Family' });
});

/* GET /nick */
router.get('/nick', (req, res, next) => {
  res.render('nick', {
    title: 'NICK BRAZDA',
    pageText: 'Nick is a Web Design / Programmer college student at Barrie Campus'
  })
})
/* Get /sami*/
router.get('/sami', (req, res, next) => {
  res.render('sami', {
    title2: 'SAMI GIBBS',
    pageText2: 'Sami is my Spouse and a buisness college student at Georgian Barrie Campus.'
  })
})
/* Get /ian*/
router.get('/ian', (req, res, next) => {
  res.render('ian', {
    title3: 'IAN BRAZDA',
    pageText3: 'Ian is my Father and is a concrete truck driver at Champlain Ready Mix in Orillia.'
  })
})
/* Get /bonnie*/
router.get('/bonnie', (req, res, next) => {
  res.render('bonnie', {
    title4: 'BONNIE BRAZDA',
    pageText4: 'Bonnie is my Mother, she is retired but used to be a Garderner at Barrie Country Golf Club.'
  })
})
/* Get /jess*/
router.get('/jess', (req, res, next) => {
  res.render('jess', {
    title5: 'JESSICA BRAZDA',
    pageText5: 'Jessica is my Sister and a Paramedic worker at Voyago, she drives immobile paitients to and from Hospitals for their appointments'
  })
})
// make the controller public
module.exports = router;
