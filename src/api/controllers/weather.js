const config = require('../config');
const request = require('request');
const baseApiUrl = `${config.app.weatherApiUri}/${config.app.weatherApiKey}`;

function getRequestUrl(forecastType, req) {
    let latitude = req.query.latitude;
    let longitude = req.query.longitude;
    if (!latitude || !longitude) {
        res.status(401).json({
            "message" : "Invalid latitude and longitude"
        });
        return;
    }
    
    let requestUrl = `${baseApiUrl}/${latitude},${longitude}?`;

    if (forecastType === 'hourly') {
        requestUrl += 'exclude=minutely,daily';
    }
    else {
        requestUrl += 'exclude=minutely,hourly';
    }

    if (req.query.metric && req.query.metric === 'metric') {
        requestUrl +=  '&units=si';      
    }

    if (req.query.lang) {
        requestUrl +=  `&lang=${req.params.lang}`;
    }

    return requestUrl;
}

module.exports.getHourly = function(req, res, next) {       
    let requestUrl = getRequestUrl('hourly', req);

    request.get(requestUrl, (error, response, body) => {
        if(error) return next(err);
        res.status(200).json(body);
    });    
}

module.exports.getDaily = function(req, res, next) {
    let requestUrl = getRequestUrl('daily', req);

    request.get(requestUrl, (error, response, body) => {
        if(error) return next(err);
        res.status(200).json(body);
    });
}