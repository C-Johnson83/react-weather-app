const db = require('../config/connection');
const { User, List } = require('../models');
const windyDB = require('./windyDB');

const userSeed = {
    "username": "johndoe",
    "email": "johndoe@example.com",
    "password": "password1234",
    "savedSearches": []
  
  }
  db.once('open', async () => {
    try {
      
  
      await windyDB('User', 'users');
  
      await User.create(userSeed);
    
  
  
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('---------------------------------------------------\n' +
      '|     "Data collections have been cleared"        |\n' +
      '|   "Data has been successfully seeded"           |\n' +
      '---------------------------------------------------');
  
    process.exit(0);
  });