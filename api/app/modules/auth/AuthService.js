var passport = require('passport');

module.exports = (function() {
  function AuthService(){

  }

  AuthService.prototype = { 
	  get:function(req, res) {
		console.log(req.isAuthenticated());
        var r = {'response':200}
		    res.send(r);
	  },
	  post:function(req, res, next) {
		return passport.authenticate('local-login', function(err, user, info) {
			console.log(err)
			console.log(user)
			console.log(info)
			if (err){ 
				return next(err);
			}
			if (!user) { 
				res.status(401).send('Unauthorized');
			}else{
			//	if (!req.body.remember) {
					req.session.cookie.maxAge = 1000 * 60 * 3;
				//} else {
				//	req.session.cookie.expires = false;
			//	}
        var r = {'response':200}
				res.status(200).send(r);
			}
			//req.logIn(user, function(err) {
			//  if (err) { return next(err); }
			//  return res.send(user);
			//});

		})(req, res, next);
	  }
  }

  return AuthService;
})()