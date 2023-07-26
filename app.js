// app.js

const express = require('express');
const app = express();
const sequelize = require('./helpers/database');
sequelize.sync()
const userRoutes = require('./routes/userRoutes');
//const mysql=require('mysql2');
app.use(express.json())
require('dotenv').config();


// Connect to the database
sequelize
  .sync()
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Middleware to parse incoming requests as JSON
app.use(express.json());

// Routes
app.use('/api', userRoutes);

const PORT = 3000;
app.listen(process.env.port||5000,()=>{console.log('you are now listening to port http://localhost:${process.env.port}')})
