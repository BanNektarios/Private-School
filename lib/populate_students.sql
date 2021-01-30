
DROP TABLE IF EXISTS `students`;

CREATE TABLE IF NOT EXISTS `private_school`.`students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `birthDate` date DEFAULT NULL,
  `tuitionFees` int(5)  NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (1, 'Kasey', 'Mitchell', '1983-08-04', 2250);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (2, 'Zoie', 'Willms', '1993-05-30', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (3, 'Vidal', 'Nikolaus', '2009-08-11', 2250);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (4, 'Marilyne', 'Green', '1971-11-08', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (5, 'Noemy', 'Olson', '1992-07-13', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (6, 'Jamal', 'Langworth', '2003-12-13', 2250);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (7, 'Sonia', 'Mills', '1972-01-24', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (8, 'Lois', 'Kling', '2013-03-24', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (9, 'Adelle', 'Daugherty', '2006-10-06', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (10, 'Cloyd', 'Cruickshank', '1983-03-24', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (11, 'Serena', 'Beahan', '2000-04-01', 2250);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (12, 'Kassandra', 'Gutkowski', '2016-04-26', 0);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (13, 'Trevion', 'Douglas', '1976-06-19', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (14, 'Abby', 'Quigley', '1986-12-26', 2250);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (15, 'Audreanne', 'Strosin', '1972-12-20', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (16, 'Frederique', 'Homenick', '1977-09-02', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (17, 'Joseph', 'Braun', '1982-12-15', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (18, 'Vickie', 'Witting', '1994-04-15', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (19, 'Wyman', 'Kiehn', '1979-02-22', 2500);
INSERT INTO `students` (`id`, `firstName`, `lastName`, `birthDate`, `tuitionFees`) VALUES (20, 'Eli', 'Hettinger', '1983-12-16', 2250);


