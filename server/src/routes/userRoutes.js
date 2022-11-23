const Router = require('../Router')
const router = new Router()

const users = [
    {
        id: 1,
        name: 'dima'
    },
    {
        id: 2,
        name: 'sasha'
    },
]

router.get('/users', (req, res) => {
    res.send(users)
})


// router.post('./users', (req, res) => {
//
// })


module.exports = router