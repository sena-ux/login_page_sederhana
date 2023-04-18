// Definisikan configurasi Database
const config = require('../config/database');
// Gunakan library mysql
let mysql = require('mysql');
// Buat koneksi
let pool = mysql.createPool(config);

// Kirim error jika koneksi gagal
pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    editProfile(req, res) {
        res.render("editProfile", {
            url: 'http://localhost:5050/',
            colorFlash: req.flash('color'),
            statusFlash: req.flash('status'),
            pesanFlash: req.flash('message'),
            userName: req.session.username,
        });
    },
    // Fungsi untuk menyimpan data
    authEditProfile(req, res) {
        let username = req.body.username
        let email = req.body.email
        let id = req.session.userid
        pool.getConnection((err, connection) => {
            connection.query(`UPDATE login_siswa SET username='${username}', email='${email}' WHERE user_id=${id}`, (err, result) => {
                res.redirect('/profile');
            });
        })
    },
    forgotpassword(req, res) {
        res.render("forgotpasswordUser", {
            url: 'http://localhost:5050/',
            colorFlash: req.flash('color'),
            statusFlash: req.flash('status'),
            pesanFlash: req.flash('message'),
            userName: req.session.username,
        });
    },
    authforgotPassword(req, res) {
        const { oldPassword, newPassword, confPassword } = req.body
        const id = req.session.userid
        pool.getConnection((err, connection) => {
            connection.query(`SELECT * FROM login_siswa WHERE user_id=${id}`, (er, re) => {
                if (oldPassword !== re[0].kataSandi) {
                    req.flash('color', 'danger')
                    req.flash('status', 'Erorr')
                    req.flash('message', 'Old password salah silahkan coba lagi!!!')
                    res.redirect('/profile/forgot')
                }
                else if (newPassword !== confPassword) {
                    req.flash('color', 'danger')
                    req.flash('status', 'Opss...')
                    req.flash('message', 'New password tidak sama dengan confirm password!!!')
                    res.redirect('/profile/forgot')
                }else if(oldPassword !== re[0].kataSandi || newPassword !== confPassword){
                    req.flash('color', 'danger')
                    req.flash('status', 'Opss...')
                    req.flash('message', 'Akun anda salah!!!')
                    res.redirect('/profile/forgot')
                } else if(oldPassword === newPassword){
                    req.flash('color', 'danger')
                    req.flash('status', 'Opss...')
                    req.flash('message', 'Old password or new password tidak boleh sama!!!')
                    res.redirect('/profile/forgot')
                } else{
                    pool.getConnection((err, connect) => {
                        connect.query(`UPDATE login_siswa SET kataSandi='${newPassword}' WHERE user_id=${id}`, (err, re) => {
                                res.redirect('/profile')
                        })
                    })
                }
            })
        })
    }
}