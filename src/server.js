// remove dotenv when running on heroku
require('dotenv').config();
//const port = process.env.PORT || 8000;
//const apiKey = process.env.API_KEY;

const axios = require('axios');
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

//Main API Function; returns JSON 
function getSpoonProducts()
{
    //const key = '&Subscription-key=c455d00cb0f64e238a5282d75921f27e';
    const header = 'Content-Type: application/json'
    const url = 'https://api.spoonacular.com/food/products/search';
    //const categories = ['steak', 'milk', 'bread', 'fruit', 'soup', 'pasta', 'vegetables'];
    let products = null;
    //const category = categories[randomInteger(categories)];
    return axios
        .get(
            `ENTER CODE HERE`
        )
        .then((results) =>
        {
			
				]);
})
		.then((results) =>
{

};

// Hosting on port 5000
app.listen(port, function ()
{
    console.log('Listening on port ' + port)
});