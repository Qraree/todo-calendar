const Router = require('../Router')
const {getTasks, createTask, deleteTask, updateTask, getTasksByDateAndUser} = require("../tasks/tasksController");
const router = new Router()

router.get('/tasks', getTasks)
router.get('/tasks/day', getTasksByDateAndUser)
router.post('/tasks', createTask)
router.delete('/tasks', deleteTask)
router.put('/tasks', updateTask)

module.exports = router