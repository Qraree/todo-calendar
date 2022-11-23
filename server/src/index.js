const PORT = 5000
const Application = require('./Application')
const app = new Application()
const jsonParser = require('./middlewares/jsonParse')
const sqlite3 = require('sqlite3').verbose()
const userRouter = require('./routes/userRoutes')

const db = new sqlite3.Database('./todo.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
})

let sql;
// sql = 'CREATE TABLE users(id INTEGER PRIMARY KEY)'


app.use(jsonParser)
app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))