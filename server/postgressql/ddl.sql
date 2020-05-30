/*DDL File*/

CREATE TABLE ers_reimbursement (
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
);

CREATE TABLE ers_users (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	ers_username VARCHAR(50),
	ers_password VARCHAR(50),
	user_first_name VARCHAR(100),
	user_last_name VARCHAR(100),
	user_email VARCHAR(150),
	user_role_id INTEGER REFERENCES ers_user_roles(id)
);

CREATE TABLE ers_reimbursement_status (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	reimb_status VARCHAR(10)
);

CREATE TABLE ers_reimbursement_type (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	reimb_type VARCHAR(10)
);

CREATE TABLE ers_user_roles (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	user_role VARCHAR(10)
);


DROP TABLE ers_reimbursement;
DROP TABLE ers_users;
DROP TABLE ers_reimbursement_status;
DROP TABLE ers_reimbursement_type;
DROP TABLE ers_user_roles;

