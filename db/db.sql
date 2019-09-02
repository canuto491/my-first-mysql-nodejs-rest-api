-- ====================== database ======================
create database if not exists company;

use company;

-- ===================== employees ======================
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

-- ===================== Projects ======================
CREATE TABLE IF NOT EXISTS projects (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(256) NOT NULL,
  `priority` INT NOT NULL,
  `description` TINYTEXT NULL,
  `deliveryDate` DATETIME NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAT` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` DATETIME NULL,
  `bDeleted` TINYINT(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`));

describe projects;

SET FOREIGN_KEY_CHECKS = 0;
truncate table projects;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO `projects` (`name`, `priority`, `description`, `deliveryDate`)
    VALUES
    ('Project  Red', 10, 'Project #1', '2019-12-01 20:10:24'),
    ('Project Blue', 5, 'Project #2', '2019-11-12 20:10:59');


select * from projects;

-- ================== Tasks Status ===================
CREATE TABLE IF NOT EXISTS task_status (
  `id` INT NOT NULL AUTO_INCREMENT,
  `alias` VARCHAR(128) NOT NULL,
  `designation` VARCHAR(256) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` DATETIME NULL,
  `bDeleted` TINYINT(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`));

describe task_status;

SET FOREIGN_KEY_CHECKS = 0;
truncate table task_status;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO `task_status`
    (`alias`, `designation`, `createdAt`, `updatedAt`, `deletedAt`, `bDeleted`)
    VALUES
    ('todo', 'To-do', '2019-09-01 19:18:38', '2019-09-01 19:18:43', NULL, 0),
    ('in-progress', 'In progress', '2019-09-01 19:19:59', '2019-09-01 19:20:02', NULL, 0),
    ('done', 'Done', '2019-09-01 19:22:12', '2019-09-01 19:22:15', NULL, 0);


select * from task_status;

-- ===================== Tasks =======================
CREATE TABLE IF NOT EXISTS tasks (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(256) NOT NULL,
  `statusId` INT NOT NULL,
  `projectsId` INT NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` DATETIME NULL,
  `bDeleted` TINYINT(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  INDEX `fk_tasks_task_status_idx` (`statusId` ASC),
  INDEX `fk_tasks_projects1_idx` (`projectsId` ASC),
  CONSTRAINT `fk_tasks_task_status`
    FOREIGN KEY (`statusId`)
    REFERENCES task_status (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tasks_projects1`
    FOREIGN KEY (`projectsId`)
    REFERENCES projects (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

describe tasks;

SET FOREIGN_KEY_CHECKS = 0;
truncate table tasks;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO `tasks`
    (`name`, `statusId`, `projectsId`)
    VALUES
    ('Task #1 from red project', 1, 1),
    ('Task #2 from red project', 1, 1),
    ('Task #1 from blue project',1, 2);

select * from tasks;
