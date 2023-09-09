const mongoose = require('mongoose')
const dotenv = require('dotenv')
const {app} = require('../app/appConfig')
dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL
const URI = MONGODB_URL


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB