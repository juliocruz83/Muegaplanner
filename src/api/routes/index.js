var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.getProfile);
router.post('/profile', auth, ctrlProfile.updateProfile);
router.post('/profile/calendars', auth, ctrlProfile.updateCalendars);
router.post('/profile/password', auth, ctrlProfile.resetPassword);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;