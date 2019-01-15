const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
const cors = require('cors');
// const knex = require('knex')

// const db = knex({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : 'ryanpedersen',
//     password : '',
//     database : 'facerecognitionapp'
//   }
// });

const app = express();

//npm installed pieces
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {

})

//signin method
// app.post('/signin', (req, res) => {
//   db.select('email', 'hash').from('login')
//     .where('email', '=', req.body.email)
//     .then(responseData => {
//       const isValid = bcrypt.compareSync(req.body.password, responseData[0].hash);
//       if (isValid) {
//         return db.select('*').from('users')
//           .where('email', '=', req.body.email)
//           .then(user => {
//             res.json(user[0])
//           })
//           .catch(err => res.status(400).json('unable to find user'))
//       } else {
//         res.status(400).json('wrong credentials inside')
//       }
//     })
//     .catch(err => res.status(400).json('wrong credentials'))
// })

//register method
// app.post('/register', (req, res) => {
//   const { email, name, password } = req.body;
//   const saltRounds = 10;
//   const salt = bcrypt.genSaltSync(saltRounds);
//   const hash = bcrypt.hashSync(password, salt);
//   db.transaction(trx => {
//     trx.insert({
//       hash: hash,
//       email: email
//     })
//     .into('login')
//     .returning('email')
//     .then(loginEmail => {   
//       return trx('users')
//         .returning('*')
//         .insert({
//           email: loginEmail[0],
//           name: name,
//           joined: new Date(),
//         })
//         .then(user => {
//           res.json(user[0]);
//         })
//     })
//     .then(trx.commit)
//     .catch(trx.rollback)
//   })
//     .catch(err => res.status(400).json('unable to register'))
// })

// //user profile
// app.get('/profile/:id', (req, res) => {
//   const { id } = req.params;
//   db.select('*').from('users').where({
//     id: id
//   })
//   .then(user => {
//     if (user.length) {
//       res.json(user[0]);
//     } else {
//       res.status(400).json('not found')
//     }
//   })
//   .catch(err => res.status(400).json('not found'))
// })


//confirming app is running in 
app.listen(3000, () => {
  console.log('app is running')
})
