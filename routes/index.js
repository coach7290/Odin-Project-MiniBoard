var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(), 
  },

  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
  }
   
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: "New post" });
  });

  router.post('/new', function(req, res, next) {

    let userName = req.body.userName;
    let textMessage = req.body.textPost;

    messages.push({
      text: textMessage,
      user: userName,
      added: new Date()

    })


    res.redirect('/')
  
    
    });






module.exports = router;
