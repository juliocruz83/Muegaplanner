var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var subscriberCtrl = require('../controllers/subscriber');

router.get('/subscribers', auth, subscriberCtrl.getSubscribers);
router.get('/subscribers/:id', auth, subscriberCtrl.getSubscriberById);
router.get('/subscribers/byname/:name', auth, subscriberCtrl.getSubscriberByName);
router.post('/subscribers', auth, subscriberCtrl.addSubscriber);
router.delete('/subscribers/:id', auth, subscriberCtrl.deleteSubscriber);
router.put('/subscribers/:id', auth, subscriberCtrl.updateSubscriber);

module.exports = router;