onst axios = require('axios');
const express = require('express');
const app = express();
const session = require('express-session');

// make sure sequelize is initialized above the new Seuquelize object below
const { Sequelize } = require('sequelize');


// This works when running on heroku, but not locally
// const sequelize = new Sequelize(process.env.DATABASE_URL); 

// Use this code when running locally
// You may need to run 'sudo apt-get install -y libpq-dev' and 'npm install pg-native'
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
// Connect to sequelize database object
const db = require('./models')
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Sequelize models and tables
db.users = require('./models/users.js')(sequelize, Sequelize);
module.exports = db;

// Hosting on port 5000
app.listen(port, function ()
{
    console.log('Listening on port ' + port)
})