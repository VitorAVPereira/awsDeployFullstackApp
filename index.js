const { app, express, port} = require('./src/config/app/appConfig')
const cors = require('cors');
const userRoutes = require('./src/routes/user.routes')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());
app.use('/auth', userRoutes)
app.listen(process.env.PORT, () => {
  console.log(`Aplicação na porta: ${process.env.PORT}`)
})