const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../models');
const cors = require("cors");
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
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    db.users.findOrCreate({ where: { email: profile.emails[0].value, userName: profile.displayName } }).then(user => {
        if (user) {
            return done(null, user[0]);
        }
    })
    console.log(profile);
    }));

app.get('/auth/google',
passport.authenticate('google', { scope: ['profile', 'email'] }))

app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/login' }),
function (req, res) {
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

// const PORT = 5000
// app.listen(PORT);

app.listen(5000, () => {
    console.log('Hello master');
})