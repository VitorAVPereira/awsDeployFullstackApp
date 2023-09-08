const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL
const URI = MONGODB_URL
const PORT = process.env.PORT || 3000

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("listening for requests");
  })
})

module.exports = dbConnection