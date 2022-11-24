const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./todo.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
})

let sql;


function  getAllUsers(req, res) { //todo Try it out
    if (req.params.id) {
        try {
            sql = 'SELECT * from users WHERE id = ?'
            db.get(sql, [req.params.id], (err, row) => {
                if (err) return res.send({message: err})
                res.send({data: row})
            })
        } catch(e) {
            console.log(e)
        }
    }
    sql = 'SELECT * FROM users';
    try {
        db.all(sql, [], (err, rows) => {
            if (err) return res.send({message: 'nope'});

            if (rows.length < 1)
                return res.send({message: "No match"})
            return res.send({data: rows}) //todo try just rows
        })
    } catch(e) {
        console.log(e)
        res.send({message: e})
    }
}

function  createUser(req, res) {
    try {
        const {id, name} = req.body
        sql = 'INSERT INTO users(id, name) VALUES(?, ?)'
        db.run(sql, [id, name], (err) => {
            if (err) return res.send({error: err})
        })
        res.send({message: 'User was created'})
    } catch(e) {
        console.log(e)
    }

}

function deleteUser(req, res) {
    try {
        sql = 'DELETE from users WHERE id = ?'
        db.run(sql, [req.params.id], (err) => {
            if (err) return res.send({message: err})
        })
        res.send({message: "User was deleted"})
    } catch(e) {
        console.log(e)
    }
}


module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
}