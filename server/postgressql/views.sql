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
    
   
   