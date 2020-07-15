require('dotenv').config();
const express = require("express");
const app = express();
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy; // local passport strategy
const db = require('../models'); // database
const flash = require('express-flash');
const expressSession = require('express-session')
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
const cors = require('cors');

// Cors
const corsOptions = {
    credentials: true,
  };

app.use(cors(corsOptions));


app.use(require('body-parser').urlencoded({ extended: true }));


app.use(passport.initialize())	 
app.use(passport.session())		 

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
  passport.deserializeUser(function(id, cb) {
    db.users.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

// Local strategy
passport.use(new LocalStrategy(
    function(email, password, cb) {
        db.users.findOrCreate({
            where: 
                {
				email: email
				} 
        .then(user => {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            if (!user.password != password) { return cb(null, false); }
            return cb(null, user);
        }) 
      });
    }
  ));

// Check to authenticate if a user is logged in. If not, redirects user to login page
function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next()
	}
	res.redirect('/login')
};
// Make sure no uers dont go back to the login page if they are already authenticated
function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
    // return res.redirect('/dashboard')
    console.log('hello')
	}
	// next() 
};

// placeholder 
//   passport.use(new LocalStrategy(
//     function(email, password, cb) {
//       db.users.findOrCreate(email, function (err, user) {
//         if (err) { return cb(err); }
//         if (!user) { return cb(null, false); }
//         if (!user.password != password) { return cb(null, false); }
//         return cb(null, user);
//       });
//     }
//   ));
  
// Routes
// Login for existing user
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

// Register for new user
  app.post('/register', checkNotAuthenticated, async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10) //includes await since we are using async
        db.users.create({
          // username: req.body.name,
          email: req.body.email,
			    password: hashedPassword,
        })
        .then(newUser => {
        console.log(`New user ${newUser.email}, with id ${newUser.password} has been created.`);
        // res.redirect('/login')//If everthing is correct, redirect user to login page to continue loggin in 
        }).catch(e => {
            res.render('register', {error: 'This email already has a user account.'})
        })
    } catch {
        res.redirect('/register') //If not correct, send user back to register page
    }
});

// Not setup yet
app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

// Not setup yet
app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

// Hosting
app.listen(3001, () => {
    console.log('Hello master');
})