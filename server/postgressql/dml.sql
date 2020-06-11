/*DML FILE*/

--Users Table	
INSERT INTO ers_users (ers_username, ers_password, user_first_name, user_last_name, user_email, user_role_id) VALUES 
('ManagerUser', '1234', 'MangerFirst', 'MangerLast', 'manger@email.com', 1),	
('EmployeeUser', '1234', 'EmployeeFirst', 'EmployeeLast', 'employee@email.com', 2);
	
--DROP TABLE authors;


--Types Table
INSERT INTO ers_reimbursement_type (reimb_type) VALUES 
	('LODGING'), ('TRAVEL'), ('FOOD'), ('OTHER');

--Status Table
INSERT INTO ers_reimbursement_status (reimb_status) VALUES 
	('Approved'), ('Denied'), ('Pending');

--User Roles Table
INSERT INTO ers_user_roles(user_role) VALUES
	('Manager'), ('Employee');


--Reimbursement Table
INSERT INTO ers_reimbursement (reimb_amount, reimb_sumit_date, reimb_resolved_date, reimb_description, 
	reimb_reciept, reimb_author_id, reimb_resolver_id, reimb_status_id, reimb_type_id) VALUES 
	
	(400, '2017-04-18'::DATE, '2017-04-26'::DATE, 'description', 'URL', 2, 1, 3, 4);

	(100, '2020-04-18'::DATE, '2020-04-26'::DATE, 'description', 'URL', 2, 1, 1, 1),
	(200, '2019-04-18'::DATE, '2019-04-26'::DATE, 'description', 'URL', 2, 1, 2, 2),
	(300, '2018-04-18'::DATE, '2018-04-26'::DATE, 'description', 'URL', 2, 1, 3, 3),
	(400, '2017-04-18'::DATE, '2017-04-26'::DATE, 'description', 'URL', 2, 1, 3, 4);



	






