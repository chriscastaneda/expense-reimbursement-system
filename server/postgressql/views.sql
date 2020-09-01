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
    
   
   
DROP ROLE rev_asses_tier3;
DROP OWNED BY rev_asses_tier3;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO blog_app_role;

REVOKE ALL ON SCHEMA public FROM rev_asses_tier3;
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM rev_asses_tier3;
REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM rev_asses_tier3;
REVOKE ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public FROM rev_asses_tier3;
   
   REVOKE postgres FROM rev_asses_tier3;
  REVOKE schema_admin FROM user_a;
   REASSIGN OWNED BY rev_asses_tier3 TO schema_admin;
   
  
