const config = require('../config/database')
const mysql = require('mysql')
const pool = mysql.createPool(config);


module.exports = {
    sharing(req, res) {
        const sql = `SELECT * FROM sharing`;
        pool.getConnection((err, conn) => {
            conn.query(sql, (err, result) => {
                res.render("sharing", {
                    url: 'http://localhost:5050/',
                    userName: req.session.username,
                    bahan: result
                });
            })
        })

    },
    pengajuan(req, res) {
        res.render("sharing", {
            url: 'http://localhost:5050/',
            userName: req.session.username,
        });
    }
}