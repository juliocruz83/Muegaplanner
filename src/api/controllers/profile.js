var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.getProfile = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User.findById(req.payload._id).exec(function(err, user) {
        res.status(200).json(user);
      });
  }
};

module.exports.updateCalendars = function(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    const calendars = req.body;

    if (!calendars) {
      res.status(400);
      res.json({'bad request': 'calendars element is missing'});
    }

    User.findByIdAndUpdate(req.payload._id, { "calendars": calendars }, { upsert: true })
      .exec((err, user) => {
        if(err) return next(err);
        res.status(200).json(user);    
    });
  }
};

module.exports.updateProfile = function(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    if (!req.body.email) {
      res.status(400).json({'bad request': 'email element is missing'});
    }

    if (!req.body.name) {
      res.status(400).json({'bad request': 'name element is missing'});
    }

    User.findByIdAndUpdate(req.payload._id, { "name": req.body.name, "email": req.body.email })
      .exec((err, user) => {
        if(err) return next(err);
        res.status(200).json(user);    
    });
  }
};

module.exports.resetPassword = function(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    if (!req.body.password) {
      res.status(400);
      res.json({'bad request': 'password element is missing'});
    }
    
    var user = new User();
    user.setPassword(req.body.password);

    User.findByIdAndUpdate(req.payload._id, { "salt": user.salt, "hash": user.hash })
      .exec((err, user) => {
        if(err) return next(err);
        res.status(200).json(user);    
    });
  }
};