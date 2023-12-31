const { router } = require('../config/app/appConfig')
const UserController = require('../controllers/userController')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.get('/', (req, res) => {
    res.json("welcome")
})

module.exports = router