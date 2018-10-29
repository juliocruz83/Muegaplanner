const router = require('express-promise-router')();
const mongojs = require('mongojs');
const db = mongojs('mongodb://localhost:27017/muega-calendar-db', ['calendars']);

// get all calendars
router.get('/calendars', (req, res, next) => {
    db.calendars.find((err, calendars) => {
        if(err) return next(err);
        res.json(calendars);
    });
});

// find one calendar
router.get('/calendars/:id', (req, res, next) => {
    db.calendars.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, calendar) => {
        if (err) return next(err);
        res.json(calendar);
    });
});

// add calendar
router.post('/calendars', (req, res, next) => {
    const calendar = req.body;
    console.log('post calendar', calendar);
    if (!calendar.name) {
        res.status(400).json({
            'error': 'Bad data'
        });
    } else {
        db.calendars.save(calendar, (err, calendar) => {
            if (err) return next(err);
            res.json(calendar);
        });
    }
});

// delete calendar
router.delete('/calendars/:id', (req, res, next) => {
    db.calendars.remove({_id: mongojs.ObjectId(req.params.id)}, (err, calendar) => {
        if (err) return next(err);
        res.json(calendar);
    });
});

// update calendar
router.put('/calendars/:id', (req, res, next) => {
    const calendar = req.body;
    let updatedCalendar = {};

    if (calendar.name) {
        updatedCalendar.name = calendar.name;
    }

    if (calendar.color) {
        updatedCalendar.color = calendar.color;
    }

    if (!updatedCalendar) {
        res.status(400);
        res.json({'error': 'Bad request'});        
    } else {
        db.calendars.update({_id: mongojs.ObjectId(req.params.id)}, updatedCalendar, {}, (err, calendar) => {
            if (err) return next(err);
            res.json(calendar);
        });
    }
});

module.exports = router;



