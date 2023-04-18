const router = require('express').Router();
const verifyUser = require('../config/verify');
const editProfileControler = require('../controller').editProfile;

router.get('/editProfile', verifyUser.isLogin, editProfileControler.editProfile);
router.get('/profile/forgot', verifyUser.isLogin, editProfileControler.forgotpassword);
router.post('/authProfile', verifyUser.isLogin, editProfileControler.authEditProfile);
router.post('/profile/forgot/auth-password', verifyUser.isLogin, editProfileControler.authforgotPassword);

module.exports = router;