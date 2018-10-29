const router = require('express-promise-router')();
const mongojs = require('mongojs');
const db = mongojs('mongodb://localhost:27017/muega-calendar-db', ['events']);

// get all events
router.get('/events', (req, res, next) => {
    db.events.find((err, events) => {
        if(err) return next(err);
        res.json(events);
    });
});

// find one event
router.get('/events/:id', (req, res, next) => {
    db.events.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, event) => {
        if (err) return next(err);
        res.json(event);
    });
});

// get events by date
router.get('/events/date/:date', (req, res, next) => {

    const dateParam = new Date(req.params.date);
    dateFilter = new Date(dateParam.getFullYear(), dateParam.getMonth(), dateParam.getDate());
    console.log('Date Filter:', dateFilter.getFullYear(), dateFilter.getMonth()+1, dateFilter.getDate());

    db.events.aggregate(
        [
          { $match: {}},
          // Extract the year, month and day portions of the start and end dates
          { $project:
              {
                name: "$name",
                location: "$location",
                notes: "$notes",
                calendar: "$calendar",
                startDateTime: "$startDateTime",
                endDateTime: "$endDateTime",
                startYear: { $year: "$startDateTime" },
                startMonth: { $month: "$startDateTime" },
                startDay: { $dayOfMonth: "$startDateTime" },
                endYear: { $year: "$endDateTime" },
                endMonth: { $month: "$endDateTime" },
                endDay: { $dayOfMonth: "$endDateTime" }
              }
          },
          // Filter by date without the time
          { $match:
              {
                startYear: { $lte: dateFilter.getFullYear() },
                startMonth: { $lte: dateFilter.getMonth()+1 },
                startDay: { $lte: dateFilter.getDate() },
                endYear: { $gte: dateFilter.getFullYear() },
                endMonth: { $gte: dateFilter.getMonth()+1 },
                endDay: { $gte: dateFilter.getDate() }
              }
          },
          { $sort: {startDateTime: 1} }
        ]
    ).toArray(
        (err, events) => {
              if (err) return next(err);
              res.json(events);
          }
    );
});

// add event
router.post('/events', (req, res, next) => {
    const event = req.body;
    if (!event.name || !event.calendar || !event.startDateTime || !event.endDateTime) {
        res.status(400).json({
            'error': 'Bad data'
        });
    } else {
        const newEvent = {
            name: event.name,
            location: event.location,
            notes: event.notes,
            calendar: event.calendar,
            startDateTime: new Date(event.startDateTime),
            endDateTime: new Date(event.endDateTime)
        };
        db.events.save(newEvent, (err, event) => {
            if (err) return next(err);
            res.json(event);
        });
    }
});

// delete event
router.delete('/events/:id', (req, res, next) => {
    db.events.remove({_id: mongojs.ObjectId(req.params.id)}, (err, event) => {
        if (err) return next(err);
        res.json(event);
    });
});

// update event
router.put('/events/:id', (req, res, next) => {
    const event = req.body;
    let updatedEvent = {};

    if (event.name) {
        updatedEvent.name = event.name;
    }

    if (event.notes) {
        updatedEvent.notes = event.notes;
    }

    if (event.location) {
        updatedEvent.location = event.location;
    }

    if (event.startDateTime) {
        updatedEvent.startDateTime = new Date(event.startDateTime);
    }

    if (event.endDateTime) {
        updatedEvent.endDateTime = new Date(event.endDateTime);
    }

    if (event.calendar) {
        updatedEvent.calendar = event.calendar;
    }

    if (!updatedEvent) {
        res.status(400);
        res.json({'error': 'Bad request'});        
    } else {
        db.events.update({_id: mongojs.ObjectId(req.params.id)}, updatedEvent, {}, (err, event) => {
            if (err) return next(err);
            res.json(event);
        });
    }
});

module.exports = router;