create database if not exists company;

use company;

create table if not exists employees (
	id INT(11) not null auto_increment,
    name varchar(45) default null,
    salary int(11) default null,
    primary key (id)
);
    
describe employees;

truncate table employees;

insert into employees values 
	(default, 'Salvador T. Schott', 1000),
	(default, 'William C. Darst', 1200),
    (default, 'Andrea A. Nott', 1500),
    (default, 'Jimmy F. Melendez', 1100),
    (default, 'Fred E. Oliveros', 1000),
    (default, 'George C. Smith', 1080),
    (default, 'Petra D. Larson', 1560);

select * from employees;