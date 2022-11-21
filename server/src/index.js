const http = require('http')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./todo.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
})

let sql;
// sql = 'CREATE TABLE users(id INTEGER PRIMARY KEY)'


const {getAllUsers} = require("./users/usersController");

const server = http.createServer((req, res) => {
    if (req.url === '/users' && req.method === 'GET') {
       getAllUsers(req, res)
    }
})