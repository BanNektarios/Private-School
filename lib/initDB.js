const mysql2 = require('mysql2');

// START HERE
// Added separate connection here because we cannot specify a DB that doesn't exist on createConnection
const connection = mysql2.createConnection({
    host: 'localhost', // change here to match your 'host'
    user: 'root', // change here to match your 'user' name
    //without database: ''
    password: '1234', // change here to match your bases 'password'
    port: '3306' // change here to match the 'port' your server is looking at
})

// also doesn't without this
connection.connect((error) => {
    if (error) {
        console.log("");
    } else {
        console.log("CONNECTED to DATABASE");
    }
});


// All functions gathered here
// init() is called at the bottom of the page to avoid hoisting
function init() {
    createDB();
    createTables();
    addData(data);
}


//  Creates the Database (--WARNING-- it deletes database if same name as 'private_school')
function createDB() {
    const query = "DROP SCHEMA IF EXISTS private_school;";
    const query2 = "CREATE SCHEMA private_school;";
    const query3 = "USE private_school;";
    //drops same name schema
    let dropQuery = () => {
        connection.query(query, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Schema Dropped`);
            }

        });

    };
    //creates our schema schema
    let createQuery = () => {
        connection.query(query2, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Schema created!`);
            }
        });
    };
    // specifing the database to use
    let useQuery = () => {
        connection.query(query3, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Using Schema!`);
            }
            connection.end();
        });
    };
    // calling in the correct sequence to avoid errors
    dropQuery();
    createQuery();
    useQuery();

}





// Creates the tables of 'private_school'
function createTables() {
    const queries = [
        "CREATE TABLE IF NOT EXISTS `private_school`.`students` (`id` int  NOT NULL AUTO_INCREMENT,`firstName` varchar(100) NOT NULL,`lastName` varchar(100) NOT NULL,`birthDate` date DEFAULT NULL,`tuitionFees` int(5)  NOT NULL,PRIMARY KEY (`id`));",
        "CREATE TABLE IF NOT EXISTS `private_school`.`trainers` (`id` int  NOT NULL AUTO_INCREMENT,`firstName` varchar(100) NOT NULL,`lastName` varchar(100) NOT NULL,`subject` varchar(100) NOT NULL,PRIMARY KEY (`id`));",
        "CREATE TABLE IF NOT EXISTS `private_school`.`courses` (`id` int  NOT NULL AUTO_INCREMENT,`title` varchar(100) NOT NULL,`stream` varchar(100) NOT NULL,`type` varchar(100) NOT NULL,`start_date` DATE NOT NULL,`end_date` DATE NOT NULL,PRIMARY KEY (`id`));",
        "CREATE TABLE IF NOT EXISTS `private_school`.`assignments` (`id` int  NOT NULL AUTO_INCREMENT,`title` varchar(100) NOT NULL,`description` varchar(100) NOT NULL,`subDate` DATE NOT NULL,`oralMark` int NOT NULL,`totalMark` int NOT NULL,PRIMARY KEY (`id`));",
        "CREATE TABLE `private_school`.`courses_students` (`course_id` INT NOT NULL,`student_id` INT NOT NULL,PRIMARY KEY (`course_id`, `student_id`),INDEX `student_id_1_idx` (`student_id` ASC) VISIBLE,CONSTRAINT `course_id_1` FOREIGN KEY (`course_id`) REFERENCES `private_school`.`courses` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT, CONSTRAINT `student_id_1` FOREIGN KEY (`student_id`) REFERENCES `private_school`.`students` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT);",
        "CREATE TABLE `private_school`.`course_trainers` (`course_id` int NOT NULL,`trainer_id` int NOT NULL,PRIMARY KEY (`course_id`,`trainer_id`),KEY `trainer_id_1_idx` (`trainer_id`),CONSTRAINT `course_id_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`), CONSTRAINT `trainer_id_2` FOREIGN KEY (`trainer_id`) REFERENCES `trainers` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		'",
        "CREATE TABLE `private_school`.`course_assignments` (`course_id` int NOT NULL,`assignment_id` int NOT NULL,PRIMARY KEY (`course_id`,`assignment_id`),KEY `course_id_idx` (`course_id`),KEY `assignment_id_idx` (`assignment_id`),CONSTRAINT `assignment_id` FOREIGN KEY (`assignment_id`) REFERENCES `assignments` (`id`),CONSTRAINT `course_id` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
        "CREATE TABLE `private_school`.`student_assignments` (`assignment_id` int NOT NULL,`student_id` int NOT NULL,PRIMARY KEY (`assignment_id`,`student_id`),KEY `student_id_3_idx` (`student_id`),CONSTRAINT `assignment_id_3` FOREIGN KEY (`assignment_id`) REFERENCES `courses` (`id`),CONSTRAINT `student_id_3` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",
    ]
    function tableQueries(quer) {
        console.log("Creating Tables...")
        for (i of quer) {
            connection.query(i, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    result.affectedRows
                }
            })
        }
        // connection.end(); <---- don't know if this should be uncommented yet
        console.log("Tables Created!")
    }
    tableQueries(queries);

}


// Here are our table data
const data = [
    //students
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Kasey', 'Mitchell', '1983-08-04', 2250);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Zoie', 'Willms', '1993-05-30', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Vidal', 'Nikolaus', '2009-08-11', 2250);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Marilyne', 'Green', '1971-11-08', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Noemy', 'Olson', '1992-07-13', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Jamal', 'Langworth', '2003-12-13', 2250);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Sonia', 'Mills', '1972-01-24', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Lois', 'Kling', '2013-03-24', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Adelle', 'Daugherty', '2006-10-06', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Cloyd', 'Cruickshank', '1983-03-24', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Serena', 'Beahan', '2000-04-01', 2250);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Kassandra', 'Gutkowski', '2016-04-26', 0);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Trevion', 'Douglas', '1976-06-19', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Abby', 'Quigley', '1986-12-26', 2250);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Audreanne', 'Strosin', '1972-12-20', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Frederique', 'Homenick', '1977-09-02', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Joseph', 'Braun', '1982-12-15', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Vickie', 'Witting', '1994-04-15', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Wyman', 'Kiehn', '1979-02-22', 2500);",
    "INSERT INTO `private_school`.`students` (`firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES ('Eli', 'Hettinger', '1983-12-16', 2250);",
    //trainers
    "INSERT INTO `private_school`.`trainers` (`firstName`, `lastName`, `subject`) VALUES ('Alex', 'Kouris', 'C++');",
    "INSERT INTO `private_school`.`trainers` (`firstName`, `lastName`, `subject`) VALUES ('Abe', 'Quig', 'Java');",
    "INSERT INTO `private_school`.`trainers` (`firstName`, `lastName`, `subject`) VALUES ('Andrew', 'Stros', 'Ruby');",
    "INSERT INTO `private_school`.`trainers` (`firstName`, `lastName`, `subject`) VALUES ('Fred', 'Hommer', 'C#');",
    "INSERT INTO `private_school`.`trainers` (`firstName`, `lastName`, `subject`) VALUES ('Jo', 'Brown', 'JavaScript');",
    "INSERT INTO `private_school`.`trainers` (`firstName`, `lastName`, `subject`) VALUES ('Vick', 'Wittong', 'Code History');",
    "INSERT INTO `private_school`.`trainers` (`firstName`, `lastName`, `subject`) VALUES ('Wynonna', 'Kiev', 'Code Philosophy');",
    "INSERT INTO `private_school`.`trainers` (`firstName`, `lastName`, `subject`) VALUES ('Elijah', 'Tinger', 'Code Art');",
    //courses
    "INSERT INTO `private_school`.`courses` (`title`, `stream`, `type`, `start_date`, `end_date`) VALUES ('CBPTJS12', 'JavaScript', 'Part-time', '2020-10-5', '2021-4-15');",
    "INSERT INTO `private_school`.`courses` (`title`, `stream`, `type`, `start_date`, `end_date`) VALUES ('CBFTJS12', 'JavaScript', 'Full-time', '2020-10-5', '2021-1-15');",
    "INSERT INTO `private_school`.`courses` (`title`, `stream`, `type`, `start_date`, `end_date`) VALUES ('CBPTJ12', 'Java', 'Part-time', '2020-10-5', '2021-4-15');",
    "INSERT INTO `private_school`.`courses` (`title`, `stream`, `type`, `start_date`, `end_date`) VALUES ('CBFTJS12', 'Java', 'Full-time', '2020-10-5', '2021-1-15');",
    "INSERT INTO `private_school`.`courses` (`title`, `stream`, `type`, `start_date`, `end_date`) VALUES ('CBPTCS12', 'C#', 'Part-time', '2020-10-5', '2021-4-15');",
    "INSERT INTO `private_school`.`courses` (`title`, `stream`, `type`, `start_date`, `end_date`) VALUES ('CBFTCS12', 'C#', 'Part-time', '2020-10-5', '2021-1-15');",
    //assignments
    "INSERT INTO `private_school`.`assignments` (`title`, `description`, `subDate`, `oralMark`, `totalMark`) VALUES ('Website', 'Create a form Website', '2020-11-15', '25', '100');",
    "INSERT INTO `private_school`.`assignments` (`title`, `description`, `subDate`, `oralMark`, `totalMark`) VALUES ('MySQL', 'Create a database', '2020-12-15', '25', '100');",
    "INSERT INTO `private_school`.`assignments` (`title`, `description`, `subDate`, `oralMark`, `totalMark`) VALUES ('NodeJS', 'Create a solid back-end app', '2021-1-15', '25', '100');",
    "INSERT INTO `private_school`.`assignments` (`title`, `description`, `subDate`, `oralMark`, `totalMark`) VALUES ('SailsJS', 'Create a dynamic website (group)', '2021-3-15', '25', '100');",
];

// Populates the database with data!
function addData(list) {
    console.log("Populating tables with data...")

    for (i of list) {
        connection.query(i, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                result.affectedRows
            }
        })
    }
    connection.end();
    console.log("Populating tables with data... Completed")

}

// With this function we initialize the database
// its here to avoid hoisting! DONT move it!
init();
