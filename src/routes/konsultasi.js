const router = require('express').Router();
const konsultasiControler = require('../controller').konsultasi;

const verifyUser = require('../config/verify');

router.get('/', verifyUser.isLogin, konsultasiControler.konsultasi);
router.get('/pengajuan', verifyUser.isLogin, konsultasiControler.pengajuan);


module.exports = router;