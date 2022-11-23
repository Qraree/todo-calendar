const Router = require('../Router')
const router = new Router()
const {createUser, getAllUsers, deleteUser} = require('../users/usersController')

router.get('/users', getAllUsers)
router.post('/users', createUser)
router.delete('/users', deleteUser)

module.exports = router