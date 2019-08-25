USE `company`;
DROP procedure IF EXISTS `save_employee`;

DELIMITER $$
USE `company`$$
CREATE PROCEDURE `save_employee` (
	IN _id int,
    IN _name varchar(45),
    in _salary int
)
BEGIN
	if _id = 0 then
		insert into employees (id, name, salary)
        value(default, _name, _salary);

        set _id = last_insert_id();
	else
		update employees
        set
			name = _name,
			salary = _salary
            where id = _id;
    end if;

    select _id as id;
END$$

DELIMITER ;
