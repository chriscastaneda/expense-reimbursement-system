/*DML FILE*/

--Users Table	
INSERT INTO ers_users (ers_username, ers_password, user_first_name, user_last_name, user_email) VALUES 
	('employee', 'password1', 'test', 'employee', 'employee@email.com'),
	('manager', 'password1', 'test', 'manager', 'manager@email.com');
--DROP TABLE authors;


--Reimbursement Table
INSERT INTO ers_reimbursement (reimb_amount, reimb_sumitted, reimb_resolved, reimb_description, reimb_reciept, reimb_author, reimb_resolver, reimb_status_id, reimb_type_id) VALUES 
	(100, '2020-01-01'::DATE, '2020-01-01'::DATE, 'description', 'URL', 1, 1, 1, 1);

	--('Abbys Article', 'Body Here', '2020-06-01'::DATE, 6);
	
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	reimb_amount INTEGER,
	reimb_sumitted DATE,
	reimb_resolved DATE,
	reimb_description VARCHAR(250),
	reimb_reciept VARCHAR(300),
	reimb_author INTEGER REFERENCES ers_users(id),
	reimb_resolver INTEGER REFERENCES ers_users(id),
	reimb_status_id INTEGER REFERENCES ers_reimbursement_status(id),
	reimb_type_id INTEGER REFERENCES ers_reimbursement_type(id)
	--------------------------------------------------------------------------------

--Comments Table
INSERT INTO commenting (comment_body, publish_date, authors_id, post_id) VALUES 
	('Peters Comments Here', '2020-01-01'::DATE, 1, 1),
	('Batmans Comments Here', '2020-02-01'::DATE, 2, 2), 
	('Wades Comments Here', '2020-03-01'::DATE, 3, 3),
	('Billys Comments Here', '2020-04-01'::DATE, 4, 4),
	('Peppers Comments Here', '2020-05-01'::DATE, 5, 5),
	('Abbys Comments Here', '2020-06-01'::DATE, 6, 6);
	
--Types Table
INSERT INTO ers_reimbursement_type (reimb_type) VALUES 
	('Lodging');

--Status Table
INSERT INTO ers_reimbursement_status (reimb_status) VALUES 
	('Denied');






