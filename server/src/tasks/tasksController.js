const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./todo.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
})

let sql;

function getTasks(req, res) {
    if (req.params.date) {
    sql = 'SELECT * from tasks WHERE date = ?'
        try {
            db.get(sql, [req.params.date], (err, row) => {
                if (err) return res.send({message: err})
                res.send({data: row})
            })
        } catch(e) {
            console.log(e)
        }
    }
    sql = 'SELECT * FROM tasks';
    try {
        db.all(sql, [], (err, rows) => {
            if (err) return res.send({message: err});

            if (rows.length < 1)
                return res.send({message: "No match"})
            return res.send({data: rows}) //todo try just rows
        })
    } catch(e) {
        console.log(e)
    }
}

function createTask(req, res) {
    try {
        const {id, content, done, date, userId} = req.body
        sql = 'INSERT INTO tasks(id, content, done, date, userId) VALUES(?, ?, ?, ?, ?)'
        db.run(sql, [id, content, done, date, userId], (err) => {
            if (err) return res.send({error: err})
        })
        res.send({message: 'Task was created'})
    } catch(e) {
        console.log(e)
    }
}

function deleteTask(req, res) {
    try {
        sql = 'DELETE from tasks WHERE id = ?'
        db.run(sql, [req.params.id], (err) => {
            if (err) return res.send({message: err})
        })
        res.send({message: "Task was deleted"})
    } catch(e) {
        console.log(e)
    }
}

function updateTask(req, res) {
    try {
        sql = 'UPDATE tasks SET done = ? WHERE id = ?'
        db.run(sql, [req.params.done, req.params.id], (err) => {
            if (err) return res.send({message: err})
        })
        res.send({message: "Task was updated"})
    } catch (e) {
        console.log(e)
    }
}


function getTasksByDateAndUser(req, res) {
    try {
        sql = 'SELECT * FROM tasks WHERE date = ? AND userId = ?'
        db.all(sql, [req.params.date, req.params.userId], (err, rows) => {
            if(err)  return res.send({message: 'error'})
            res.send(rows)
        })
    } catch(e) {

    }
}

module.exports = {
    getTasks,
    createTask,
    deleteTask,
    updateTask,
    getTasksByDateAndUser
}

//todo move database logic to services