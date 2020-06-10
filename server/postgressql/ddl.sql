/*DDL File*/

CREATE TABLE ers_reimbursement (
	reimb_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	reimb_amount INTEGER,
	reimb_sumit_date DATE,
	reimb_resolved_date DATE,
	reimb_description VARCHAR(250),
	reimb_reciept VARCHAR(300),
	reimb_author_id INTEGER REFERENCES ers_users(user_id),
	reimb_resolver_id INTEGER REFERENCES ers_users(user_id),
	reimb_status_id INTEGER REFERENCES ers_reimbursement_status(status_id),
	reimb_type_id INTEGER REFERENCES ers_reimbursement_type(type_id)
);

CREATE TABLE ers_users (
	user_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	ers_username VARCHAR(50),
	ers_password VARCHAR(50),
	user_first_name VARCHAR(100),
	user_last_name VARCHAR(100),
	user_email VARCHAR(150),
	user_role_id INTEGER REFERENCES ers_user_roles(user_roles_id)
);

CREATE TABLE ers_reimbursement_status (
	status_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	reimb_status VARCHAR(50)
);

CREATE TABLE ers_reimbursement_type (
	type_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	reimb_type VARCHAR(50)
);

CREATE TABLE ers_user_roles (
	user_roles_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	user_role VARCHAR(50)
);


DROP TABLE ers_reimbursement;
DROP TABLE ers_users;
DROP TABLE ers_reimbursement_status;
DROP TABLE ers_reimbursement_type;
DROP TABLE ers_user_roles;
--Drop all
DROP TABLE ers_reimbursement, ers_users, ers_reimbursement_status, ers_reimbursement_type, ers_user_roles;

