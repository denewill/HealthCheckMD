create database if not exists mydb;
use sql12309203;
create table if not exists `medicalrecord`(
	`entrynumber` int auto_increment,
    `firstname` varchar(20),
    `lastname` varchar(20),
    `dob` varchar(10),
    `gender` varchar(20),
    `streetaddress` varchar(60),
    `town` varchar(50),
    `postcode` int,
	`email` varchar(60),
    `phonenumber` varchar(15),
    `hiv` varchar(15),
    `height` int,
    `weight` int,
    `currentdisease` varchar(255),
    `sugarlevel` int,
    `pastmedicalhistory` varchar(255),
    `pastsurgery` varchar(255),
    primary key(`entrynumber`)
)

create table if not exists `users`(
	`username` varchar(20),
	`password` varchar(20),
	`email` varchar(20),
	primary key(`username`)
)

insert into users values (
	'tharris',
	'hassword',
	'tharris@gmail.com'
)

insert into medicalrecord (
	firstname,
	lastname,
    dob,
    gender,
    streetaddress,
    town,
    postcode,
	email,
    phonenumber,
    hiv,
    height,
    weight,
    currentdisease,
    sugarlevel,
    pastmedicalhistory,
    pastsurgery
) values (
	'Tee',
	'Harrison',
	'10/02/1995',
	'male',
	'1120 apple st',
	'Sunshine',
	'34440',
	'aa@yg.com',
	'111111111',
	'yes',
	'180',
	'80',
	'Cancer',
	'100',
	'',
	''
)