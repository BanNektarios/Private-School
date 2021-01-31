var express = require('express');
var router = express.Router();
var dbConnection = require('../lib/db');


/* GET Lists page. */
router.get('/', (req, res, next) => {
    res.render('list', { title: 'Lists', headings: 'Choose what list you want to see!' })
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
router.get('/trainers/:message?', (req, res, next) => {
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

router.post('trainers', (req, res, next) => {
    const { id, firstName, lastName, subject } = req.params;
    const query = `INSERT INTO trainers(firstName, lastName, subject) VALUES(?, ?, ?);`;
    dbConnection.execute(query, [firstName, lastName, subject], (err, status) => {
        if (err) {
            res.render('list', { title: "List - ERROR", headings: 'Got And error on "/add/trainers"' })
        } else {
            res.redirect(`list/trainers?Added trainer`);
        }
    });
});





module.exports = router;
