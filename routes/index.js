var express = require('express');
var router = express.Router();
var Email = require('../Models/email.js');
var db = require('../config/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.route('/')
	.post((req, res)=>{
		var newEmail = new Email;

		newEmail.email = req.body.email;
		newEmail.save((err) => {
			if (err) throw err;
		});
		res.render('index');
	})

module.exports = router;
