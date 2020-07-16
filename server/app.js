const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../models');
const flash = require('express-flash');
const session = require('express-session');
require('dotenv').config();
const cors = require('cors');

//  doesnt work
// app.use('*', function(req, res, next) {
// //replace localhost:8080 to the ip address:port of your server
// res.header("Access-Control-Allow-Origin", "http://localhost:8080");
// res.header("Access-Control-Allow-Headers", "X-Requested-With");
// res.header('Access-Control-Allow-Headers', 'Content-Type');
// res.header('Access-Control-Allow-Credentials', true);
// next(); 
// });

//enable pre-flight
// app.options('*', cors()); 

// IP's allowed all access this server
// let whitelist = ['http://localhost:3000', 'http://127.0.0.1:3000'];

// let corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// // Cross-Origin Resource Sharing
// app.use(cors(corsOptions));

// Cors
const corsOptions = {
    credentials: true,
  };

  app.use(cors(corsOptions));

let user = {};

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// Google strategy
passport.use(new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    db.users.findOrCreate({ where: { email: profile.emails[0].value, userName: profile.displayName } }).then(user => {
        if (user) {
            return done(null, user[0]);
        }
    })
    console.log(profile);
    }));

// Routes
app.get('/auth/google',
passport.authenticate('google', { scope: ['profile', 'email'] }))

app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/login' }),
function (req, res) {
    res.redirect("http://localhost:3000/");
    res.json(user);
});

app.get("/user", (req, res) => {
    console.log("getting user data!");
    res.send(user);
});

app.get('/logout', (req, res) => {
    console.log("logging out");
    user = {};
    res.redirect("/");
});

app.listen(3001, () => {
    console.log('Hello master');
})