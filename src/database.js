// refactor this to use dotenv
// connect to database object
const db = require('../models')
const Users = db.tutorials;

// Readline for testing
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Test queries
rl.question('email? ', (email) => {
    rl.question('password? ', (password) => {
        rl.question('full name? ', (full_name) => {
            rl.close();
            // Create the album
            Users.findOrCreate({
                where:
                    {
                    email: email,
                    password: password,
                    full_name: full_name
                    }
            })
            // .then(newAlbum => {
            //     console.log(`New artist with ${newAlbum.album_name}, with id ${newAlbum.id} has been created.`)
            // })
        })
    })
 })


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


// working code
// const { Sequelize } = require('sequelize');

// refactor this to use dotenv
// const sequelize = new Sequelize('refrigerator_app', 'postgres', 'wanker', {
//     host: 'localhost',
// 	dialect: 'postgres',
// });

// connect to database object
// const db = require('../models')
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// Load sequelize models and tables
// db.users = require('../models/users.js')(sequelize, Sequelize);
// module.exports = db;


// Readline for testing
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// Test queries
// rl.question('email? ', (email) => {
//     rl.question('password? ', (password) => {
//         rl.question('full name? ', (full_name) => {
//             rl.close();
//             // Create the album
//             db.users.findOrCreate({
//                 where:
//                     {
//                     email: email,
//                     password: password,
//                     full_name: full_name
//                     }
//             })
//             // .then(newAlbum => {
//             //     console.log(`New artist with ${newAlbum.album_name}, with id ${newAlbum.id} has been created.`)
//             // })
//         })
//     })
//  })


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });