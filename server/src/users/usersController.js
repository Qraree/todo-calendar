const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./todo.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
})

let sql;

let users = [
    {
        id: 1,
        name: 'dima'
    },
    {
        id: 2,
        name: 'sasha'
    },
]

function  getAllUsers(req, res) {
    if (req.params.id) {
        return res.send(users.filter(user => user.id == req.params.id))
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
    users = users.filter(user => user.id != req.params.id)
    res.send(users)
}


module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
}