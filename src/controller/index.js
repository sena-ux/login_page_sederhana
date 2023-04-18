const login = require('./controller-login');
const register = require('./controller-register');
const home = require('./controller-home');
const profile = require('./controller-profile');
const editProfile = require('./controller-editProfile');
const konsultasi = require('./controller-konsultasi');
const permision = require('./controller-permision');
const sharing = require('./controller-sharing');

module.exports ={
	login,
	register,
	home,
	profile,
    editProfile,
	konsultasi,
	permision,
	sharing
};