var express = require('express');
var router = express.Router();

// Get learn
router.get('/learn', ensureAuthenticated, function(req, res){
	res.render('learn');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
