const PORT = 5000
const Application = require('./Application')
const app = new Application()
const jsonParser = require('./middlewares/jsonParse')
const urlParser = require('./middlewares/parseURL')
const userRouter = require('./routes/userRoutes')
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./todo.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
})

app.use(urlParser('http://localhost:5000'))
app.use(jsonParser)
app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))

module.exports = db