const db = require('../config/db')

db.run(`create table if not exists user (
    id integer primary key autoincrement,
    name text not null,
    email text not null 
)`);

module.exports = {
    create: (name, email, callback) => {
        db.run(`insert into user (name, email) values (?, ?)`, [name, email], function (err) {
            callback(err, { id: this.lastID, name, email });
        });
    },
    findAll: (callback) => {
        db.all(`select * from user`, [], callback);
    },
    update: (id, name, email, callback) => {
        db.run(`update user set name = ?, email = ? where id = ?`, [name, email, id], function (err) {
            callback(err, { updated: this.changes });
        });
    },
    delete: (id, callback) => {
        db.run(`delete from user where id = ?`, id, function (err) {
            callback(err, { deleted: this.changes });
        });
    }
}