const { app, express, port} = require('./src/config/app/appConfig')
const cors = require('cors');
const userRoutes = require('./src/routes/user.routes')
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database/database');
const PORT = process.env.PORT || 4500
app.use(express.json())
app.use(bodyParser.json())
app.use(cors());
app.use('/auth', userRoutes)
connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("listening for requests");
  })
})