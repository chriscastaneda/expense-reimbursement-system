/*Views File*/
SELECT * FROM authors;

SELECT title FROM posts;

SELECT publish_date FROM posts;

DROP VIEW author_name;

/*Test*/

---Create User: /posts/id
SELECT 
	ers_users.*,
    ers_user_roles.first_name, authors.last_name
    FROM posts 
    LEFT JOIN authors ON posts.authors_id = authors.id
    WHERE posts.id = 1;
    
   
   
   
   ers_users
   id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	ers_username VARCHAR(50),
	ers_password VARCHAR(50),
	user_first_name VARCHAR(100),
	user_last_name VARCHAR(100),
	user_email VARCHAR(150),
	user_role_id INTEGER REFERENCES ers_user_roles(id)
  
	
	ers_user_roles
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	user_role VARCHAR(10)