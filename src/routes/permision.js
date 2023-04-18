const router = require('express').Router();
const permisionControler = require('../controller').permision;

const verifyUser = require('../config/verify');

router.get('/', verifyUser.isLogin, permisionControler.permision);
router.get('/pengajuan', verifyUser.isLogin, permisionControler.pengajuan);

module.exports = router;