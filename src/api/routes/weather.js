const config = require('../config');
var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: config.app.tokenSecret,
  userProperty: 'payload'
});

var weatherCtrl = require('../controllers/weather');

router.get('/weather/hourly', auth, weatherCtrl.getHourly);
router.get('/weather/daily', auth, weatherCtrl.getDaily);

module.exports = router;