require('dotenv').config();
const express = require('express');
const app = express();
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy; // local passport strategy
const db = require('../models'); // database
const flash = require('express-flash');
const expressSession = require('express-session'); // not sure if we need this
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan'); // for logging purposes
const jwt = require("jsonwebtoken");

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

// Cors
const corsOptions = {
  origin: 'http://localhost:5000'
};
app.use(cors(corsOptions));

// for logging errors
app.use(logger('dev'));

// express json
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// Local passport strategy
passport.use(new LocalStrategy(
  function (email, password, cb) {
    console.log({ email, password })
    db.user.findOrCreate({
      where: {
        email: email
      }
        .then(user => {
          if (!user) {
            return cb(null, false);
          }
          if (!user.password != password) {
            return cb(null, false);
          }
          return cb(null, user);
        })
    }).catch(error => {
      return cb(error)
    })
  }
));

// Passport JWT for session
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.jwtFromRequest = ExtractJwt.fromHeader('authorization');
opts.secretOrKey = process.env.SECRET;

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  db.user.findOne({
    id: jwt_payload.id
  }, function (err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
      // or you could create a new account
    }
  });
}));

passport.serializeUser(function (user, cb) {
  console.log(user)
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

// initialize passport
app.use(passport.initialize())
app.use(passport.session())

// Check to authenticate if a user is logged in. If not, redirects user to login page
// function checkAuthenticated(req, res, next) {
// 	if (req.isAuthenticated()) {
// 		return next()
// 	}
// 	res.redirect('/login')
// };
// Make sure no users dont go back to the login page if they are already authenticated
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // return res.redirect('/dashboard')
    console.log('hello')
  }
  next()
};

// Registration route
app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    // Encrypt the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10) //includes await since we are using async 
    db.user.create({
      email: req.body.email,
      password: hashedPassword
    })
      .then(newUser => {
        console.log(`New user ${newUser.email}, with id ${newUser.password} has been created.`);
        // res.redirect('/dashboard')//If everthing is correct, redirect user to login page or dashboard to continue
      }).catch(e => {
        console.log(e)
        res.json({
          error: 'This email already has a user account.'
        })
      })
  } catch {
    res.redirect('/register') //If not correct, send user back to register page
  }
});

// Login route
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password; // Find user by email
  console.log(email);
  db.user.findOne({
    where: {
      email: email
    }
  })
    .then(user => {
      console.log(user)
      // Check if user exists
      if (!user) {
        return res.status(404).json({
          emailnotfound: "Email not found"
        });
      }
      // Check password
      // console.log(password) // this is the password entered in the form
      // console.log(user.password) // this is the hashed password in the DB
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.user_id
          }; // Sign token
          jwt.sign(
            payload,
            opts.secretOrKey, {
            expiresIn: 31556926 // 1 year in seconds
          },
            (err, token) => {
              res.json({
                success: true,
                token: token,
                email: email,
                id: user.user_id
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({
              passwordincorrect: "Password incorrect"
            });
        }
      });
    });
})

app.get('/login', (req, res) => {
  res.send('Sorry wrong password')
})

app.use(
  (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1] || null
    console.log(token.split(' ')[1])
    //If we find a token in the request authorization header we will verify and continue the request, by calling next()
    if (token) {
      const userInfo = jwt.verify(token, process.env.SECRET)
      return db.user.findOne({ user_id: userInfo.id }).then(user => {
        if (!user) {
          return res.redirect('/login')
        }
        req.user = user
        next()
      })
    } else {
      //No token found so they are redirected to login.
      res.status(501).send('Unauthorized')
    }
  }
)
// app.get('/token', passport.authenticate('jwt', { session: false }))
// Protected route(s)
app.get('/SearchForm', passport.authenticate('jwt', {
  session: false
}), function (req, res) {
  res.json({
    msg: 'Congrats! You are seeing this because you are authorized'
  });
});

app.post('/addItem', (req, res) => {
  const { user_id } = req.user
  db.user_products.create({ ...req.body, user_id }).then(res => {
    console.log(res)
  })
})
// Retrieve user's fridge
app.get('/userItems', async (req, res) => {
  const { user_id } = req.user // use ID of currently logged in user
  const user = await db.user.findOne({ user_id }) // find user in DB
  const products = await user.getProducts({ raw: true }) // reference user ID with user products table
  res.json(products) // return the products table for that user
})

app.delete('/delete', async (req, res) => {
  const { user_id } = req.user
  console.log(req.body.id)
  await db.user_products.destroy({ 
    where: {
      id: req.body.id,
      user_id: user_id
    }
  })
})

// Not setup yet
// app.get('/logout',
//   function(req, res){
//     req.logout();
//     res.redirect('/');
//   });

// Not setup yet
// app.get('/profile',
//   require('connect-ensure-login').ensureLoggedIn(),
//   function(req, res){
//     res.render('profile', { user: req.user });
//   });

//====AXIOS CALL TO TRY TO ACCESS THE SPOONACULAR API FROM THE BACKEND. NOT BEING USED RIGHT NOW, SAVING FOR A LATER DATE
// const axios = require('axios');

// app.get('/apicall', (req, res) =>
// {
//     //const queryInput = 'meat'
//     axios(
//         `https://api.spoonacular.com/food/products/search?query=pizza&apiKey=5c87fc7501454e29ad5a56bb45d581bd`
//     )

//         .then((response) =>
//         {
//             res.send(response.data.products)
//             //console.log(response.data)
//         })
//         .catch((error) =>
//         {
//             console.log(error)
//         })
// })

// Hosting
app.listen(5001, () => {
  console.log(`App is listening on port 5001`);
})