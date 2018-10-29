var mongoose = require('mongoose');
var Subscriber = mongoose.model('Subscriber');

module.exports.getSubscribers = function(req, res, next) {
    Subscriber.find().exec(function(err, subscribers) {
        if(err) return next(err);
        res.status(200).json(subscribers);
    });
};

module.exports.getSubscriberById = function(req, res, next) {
    if (!req.params.id) {
        res.status(401).json({
            "message" : "Invalid Id"
        });
    } else {
        Subscriber.findById(req.params.id).exec(function(err, subscriber) {            
            if(err) return next(err); 
            res.status(200).json(subscriber);
        });
    }
};

module.exports.getSubscriberByName = function(req, res, next) {
    if (!req.params.name) {
        res.status(401).json({
            "message" : "Invalid name"
        });
    } else {
        Subscriber.findOne({name: req.params.name }).exec(function(err, subscriber) {            
            if(err) return next(err); 
            res.status(200).json(subscriber);
        });
    }
}

module.exports.addSubscriber = function(req, res, next) {
    const subscriberData = req.body;
    if (!subscriberData.name) {
        res.status(400).json({
            'error': 'Bad Data'
        });
    } else {
        var newSubscriber = new Subscriber({
            name: subscriberData.name,
            calendars: subscriberData.calendars
        });

        newSubscriber.save(function(err, subscriber) {
            if (err) return next(err);
            res.status(200).json(subscriber);
        });
    }
}

module.exports.deleteSubscriber = function(req, res, next) {
    if (!req.params.id) {
        res.status(401).json({
            "message" : "Invalid Id"
        });
    } else {
        Subscriber.findByIdAndRemove(req.params.id, (err, subscriber) => {
            if(err) return next(err);
            res.status(200).json(subscriber);        
        });
    }
}

module.exports.updateSubscriber = function(req, res, next) {    
    if (!req.params.id) {
        res.status(401).json({
            "message" : "Invalid Id"
        });
    } else {
        const subscriber = req.body;
        let updatesubscriber = {};
        
        if(subscriber.name) {
            updatesubscriber.name = subscriber.name;
        }

        if(subscriber.calendars) {
            updatesubscriber.calendars = subscriber.calendars;
        }

        if(!updatesubscriber) {
            res.status(400);
            res.json({'error': 'bad request'});
        } else {
            Subscriber.findByIdAndUpdate(req.params.id, updatesubscriber, (err, subscriber) => {
                if(err) return next(err);
                res.status(200).json(subscriber);    
            });
        }    
    }
}