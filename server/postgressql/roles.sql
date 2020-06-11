/*BLOG_APP_ROLE*/

---Read post(title): /posts/id
SELECT 
	posts.*,
    authors.first_name, authors.last_name
    FROM posts 
    LEFT JOIN authors ON posts.authors_id = authors.id
    WHERE posts.id = 1;

--Posts -Read all author posts: /posts/authors
SELECT 
	posts.title, posts.body, posts.publish_date, posts.authors_id
	authors.first_name, authors.last_name
	FROM posts LEFT JOIN authors ON posts.authors_id = authors.id WHERE authors.id = 1;

--SELECT FROM title
SELECT * FROM posts WHERE title = 'Peters Article';

--Read comment by post id: comments/posts/id
SELECT 
	posts.title,
    commenting.*,
	authors.first_name, authors.last_name
    FROM posts 
    LEFT JOIN commenting ON posts.id = commenting.post_id
    LEFT JOIN authors ON commenting.authors_id = authors.id
    WHERE posts.id = 1;

   
 ----------------------------------------
 ---Login Page


---Employee Dashboard
SELECT 
	ers_reimbursement.reimb_id, 
	ers_reimbursement.reimb_amount, 
	ers_reimbursement.reimb_sumit_date, 
	ers_reimbursement.reimb_resolved_date, 
	ers_reimbursement.reimb_description, 
	
	ers_users.user_first_name, ers_users.user_last_name,
	reimb_status,
	reimb_type
	FROM ers_reimbursement
	LEFT JOIN ers_users ON ers_reimbursement.reimb_resolver_id = ers_users.user_id
	LEFT JOIN ers_reimbursement_status ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.status_id
	LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id
	WHERE ers_reimbursement.reimb_id = 1;

--Employee Pending
SELECT  
	ers_reimbursement.reimb_id,
	ers_reimbursement.reimb_sumit_date, 
	
	reimb_type
	FROM ers_reimbursement
	LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id
	WHERE ers_reimbursement.reimb_id = 3;

--Employee Add Reimbursements
SELECT  
	/*ers_reimbursement.reimb_id, */
	ers_reimbursement.reimb_amount, 
	ers_reimbursement.reimb_sumit_date, 
	ers_reimbursement.reimb_description, 
	ers_reimbursement.reimb_reciept,
	
	reimb_type
	FROM ers_reimbursement
	LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id
	WHERE ers_reimbursement.reimb_id = 1;

------------------------------------------------------------

--Manager Dashboard
SELECT 
	ers_reimbursement.reimb_id, 
	ers_reimbursement.reimb_amount, 
	ers_reimbursement.reimb_sumit_date, 
	ers_reimbursement.reimb_resolved_date, 
	ers_reimbursement.reimb_description,
	
	ers_users.user_first_name, ers_users.user_last_name,
	
	reimb_status,
	
	reimb_type
	
	FROM ers_reimbursement
	LEFT JOIN ers_users ON ers_reimbursement.reimb_author_id = ers_users.user_id
	LEFT JOIN ers_reimbursement_status ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.status_id
	LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id;
	

--Manager Filter by Status
SELECT 
	ers_reimbursement.reimb_id, 
	ers_reimbursement.reimb_amount, 
	ers_reimbursement.reimb_sumit_date, 
	ers_reimbursement.reimb_resolved_date, 
	ers_reimbursement.reimb_description,
	
	ers_users.user_first_name, ers_users.user_last_name,
	
	reimb_status,
	
	reimb_type
	
	FROM ers_reimbursement
	LEFT JOIN ers_users ON ers_reimbursement.reimb_author_id = ers_users.user_id
	LEFT JOIN ers_reimbursement_status ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.status_id
	LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id
	WHERE ers_reimbursement_status.status_id = 3;


--Manager Pending
SELECT  
	ers_reimbursement.reimb_id,
	ers_reimbursement.reimb_sumit_date, 
	
	ers_users.user_first_name, ers_users.user_last_name,
	
	reimb_type
	FROM ers_reimbursement
	LEFT JOIN ers_users ON ers_reimbursement.reimb_author_id = ers_users.user_id
	LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id
	WHERE ers_reimbursement.reimb_status_id = 3;

--Manger Review Request: Read update by id
SELECT  
	ers_reimbursement.reimb_id,
	ers_reimbursement.reimb_amount, 
	ers_reimbursement.reimb_sumit_date,
	ers_reimbursement.resolved_date,
	ers_reimbursement.reimb_description, 
	ers_reimbursement.reimb_reciept,
	
	ers_users.user_first_name, ers_users.user_last_name,
	
	
	reimb_status,
	reimb_type
	FROM ers_reimbursement
	LEFT JOIN ers_users ON ers_reimbursement.reimb_author_id = ers_users.user_id
	LEFT JOIN ers_reimbursement_status ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.status_id
	LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id
	WHERE ers_reimbursement.reimb_status_id = 3 ORDER BY ers_reimbursement.reimb_sumit_date;
	


