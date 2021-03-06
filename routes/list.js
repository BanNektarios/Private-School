var express = require('express');
var router = express.Router();
var dbConnection = require('../lib/DB');
const { Student } = require('../models/student');


var fullUrl; // <====== can I use this??
/* GET Lists page. */
router.get('/', (req, res, next) => {
    fullUrl = req.protocol + '://' + req.get('host') + req.baseUrl;
    res.render('list', { title: 'Lists', headings: 'Choose what item you want to see!' })
});

/* GET Students page. */
router.get('/students', (req, res, next) => {
    const query = "SELECT * FROM students"
    dbConnection.query(query, (err, rows) => {
        if (err) {
            res.render('list', { title: "List - ERROR" })
        } else {
            res.render('students', { title: 'Students', headings: 'A list of students', students: rows });
        }
    })
});


/* GET Courses page. */
router.get('/courses/:message?', (req, res, next) => {
    const query = "SELECT * FROM courses"
    dbConnection.query(query, (err, rows) => {
        if (err) {
            res.render('list', { title: "List - ERROR", headings: 'Got And error on "/courses"' })
        } else {
            res.render('courses', { title: 'Courses', headings: 'A list of courses', courses: rows });
        }
    })
});

/* GET Trainers page. */
router.get('/trainers', (req, res, next) => {
    const query = "SELECT * FROM trainers"
    dbConnection.query(query, (err, rows) => {
        if (err) {
            res.render('list', { title: "List - ERROR", headings: 'Got And error on "/trainers"' })
        } else {
            res.render('trainers', { title: 'Trainers', headings: 'A list of trainers', trainers: rows });
        }
    })
});

/* GET Trainers page. */
router.get('/assignments/:message?', (req, res, next) => {
    const query = "SELECT * FROM assignments"
    dbConnection.query(query, (err, rows) => {
        if (err) {
            res.render('list', { title: "List - ERROR", headings: 'Got And error on "/assignments"' })
        } else {
            res.render('assignments', { title: 'Assignments', headings: 'A list of assignments', assignments: rows });
        }
    })
});

// Gets the page where we add students
router.get('/students/add', (req, res, next) => {
    res.render('add_student', { title: 'New Student', headings: 'Fill the new Student Form.' })
})

// posts the new data from the form to students
router.post('/students/add', (req, res, next) => {
    const query = `INSERT INTO students(firstName, lastName, birthDate, tuitionFees) VALUES(?, ?, ?, ?);`;
    dbConnection.execute(query,[req.body.firstName, req.body.lastName, req.body.birthDate, req.body.tuitionFees], (err, status) => {
        if (err) {
            res.render('list', { title: "List - ERROR", headings: 'Got And error on "/add/students"' + err })
        } else {
            res.redirect(`/list/students`);
        }
    });
});

// Gets the page where we add trainers
router.get('/trainers/add', (req, res, next) => {
    res.render('add_trainer', { title: 'New Trainer', headings: 'Fill the new trainer Form.' })
})

// posts the new data from the form to trainers
router.post('/trainers/add', (req, res, next) => {
    const query = `INSERT INTO trainers(firstName, lastName, subject) VALUES(?, ?, ?);`;
    dbConnection.execute(query,[req.body.firstName, req.body.lastName, req.body.subject], (err, status) => {
        if (err) {
            res.render('list', { title: "List - ERROR", headings: 'Got And error on "/add/trainers"' })
        } else {
            res.redirect(`/list/trainers`);
        }
    });
});

module.exports = router;
