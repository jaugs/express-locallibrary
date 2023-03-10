var express = require('express');
var router = express.Router();


function makeButton() {
  const button = document.createElement('button')
  button.innerText='eee'
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('makeButton');
});


module.exports = router;