// config/database.js

const  Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'userdb',
  'root',
  '',
  {
    dialect:'mysql'
  }
);
// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'userdb',
// })
sequelize.authenticate().then(
  ()=>{
    console.log('connection is successful');
  }
  ).catch(
    async(err)=>{
      console.log('your connection was not successful',err)
    }
  );

module.exports = sequelize;
