var express = require('express');
var router = express.Router();


/* GET Students page. */
router.get('/', function (req, res, next) {
    res.render('list', {title: 'Lists', headings: 'Choose what list you want to see!'})
});

/* GET Students page. */
router.get('/students', function (req, res, next) {
    var dbConnection = require('../lib/db');
    const query = "SELECT * FROM students"
    dbConnection.query(query, (err, rows) => {
        if (err) {
            res.render('list', { title: "List - ERROR" })
        } else {
            res.render('students', { title: 'Students', students: rows });
        }
    })
});


/* GET Courses page. */
router.get('/courses/:message?', function (req, res, next) {
    var dbConnection = require('../lib/db');
    const query = "SELECT * FROM courses"
    dbConnection.query(query, (err, rows) => {
        if (err) {
            res.render('list', { title: "List - ERROR" , headings: 'Got And error on "/courses"'})
        } else {
            res.render('courses', { title: 'Courses', courses: rows });
        }
    })
});




module.exports = router;
