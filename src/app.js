const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

require('./api/models/db');
require('./api/models/user');
require('./api/models/subscriber');
// Get the Passport config after model is defined
require('./api/config/passport');

const routesApi = require('./api/routes/index');
const subscribersRoutes = require('./api/routes/subscribers');
const calendarsRoutes = require('./api/routes/calendar');
const eventsRoutes = require('./api/routes/event');

const app = express();

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());

//routes
app.use('/api', routesApi);
app.use('/api', subscribersRoutes);
app.use('/api', calendarsRoutes);
app.use('/api', eventsRoutes);

//static files
app.use(express.static(path.join(__dirname, 'dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//start server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
})

//module.exports = app;