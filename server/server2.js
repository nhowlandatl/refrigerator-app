require('dotenv').config();
const bodyParser = require('body-parser');
const _ = require('lodash');
const axios = require('axios');
const express = require('express');
const app = express();
const db = require('../models'); // sequelize
const session = require('express-session');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
// const LocalStrategy = require('passport-local').Strategy; 
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const cors = require('cors');
// const methodOverride = require('method-override'); 

// const initializePassport = require('./passport-config'); //referencing the location where we initialize passport //initializing from passport-config
// initializePassport(
// 	passport,
// 	email => db.users.findOne({ where: { email: email } }),
// 	id => db.users.findByPk(id)
// );

const corsOptions = {
    credentials: true,
  };

  app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false })); // This allows for the fields (password/email) on the form page to be access inside the req variable inside the login POST method
app.use(flash())
app.use(session({
	secret: process.env.SESSION_SECRET, // We need to ask about this
	resave: false,// Should we resave session variables if nothing changes? 
	saveUninitialized: false // Should we save an empty value in the session if there is not value?
}));
// app.use(methodOverride('_method')); 

// Make sure to always put the initialize before the passport.session
app.use(passport.initialize());
app.use(passport.session());

passport.use(new googleStrategy({
	clientID: process.env.clientID,
	clientSecret: process.env.clientSecret,
	callbackURL: "http://localhost:3000/auth/google/callback"
},
	function (accessToken, refreshToken, profile, done) {
		// userEmail = profile.emails[0].value; 
		db.users.findOrCreate({
			where: {
					email: profile.emails[0].value, 
					username: profile.displayName
					} 
		}).then(user => {
        	if (user) {
            	return done(null, user[0]);
        	}
		})
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
		return res.redirect('/dashboard')
	}
	next()
};

function logRequest(req, res, next) {
	console.log('another request');
	next();
};

app.get('/auth/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
)

app.get('/auth/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	function (req, res) {
		console.log("whatever");
		res.redirect('/');
	});

app.get('/login', checkNotAuthenticated, (req, res) => {
	res.render('login.ejs')
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
	successRedirect: '/dashboard',
	failureRedirect: '/login',
	failureFlash: true
},
))

app.get('/dashboard', checkAuthenticated, logRequest, (req, res, next) => {
	res.render('dashboard', { gameSession, user: req.user });
})

app.get('/register', checkNotAuthenticated, (req, res) => {
	res.render('register.ejs', { error: null })
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10) //includes await since we are using async
        db.users.create({
            username: req.body.name,
            email: req.body.email,
			password: hashedPassword,
			totalcorrect: 0,
			totalwrong: 0,
			totalanswered: 0,
			average: 0
        })
        .then(newUser => {
        console.log(`New user ${newUser.username}, with id ${newUser.id} has been created.`);
        res.redirect('/login')//If everthing is correct, redirect user to login page to continue loggin in
        }).catch(e => {
            res.render('register', {error: 'This email already has a user account.'})
        })
    } catch {
        res.redirect('/register') //If not correct, send user back to register page
    }
});

// Create logout function. This function is provided by passport. Envoked using methodOverride
// Install methodOverride library and require & use
app.delete('/logout', (req, res) => {
	req.logOut()
	res.redirect('/login')
})

// Body parser for responses
app.use(bodyParser.urlencoded({ extended: false })) // parse application/json
app.use(bodyParser.json())

app.listen(3001, () => {
    console.log('Hello master');
})