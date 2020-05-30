# Project 

Building a RESTful API using TypeScript and Express.

Subject: 
- Blog posting system API: 
- Authors, Posts, Comments

## Features
- [ ] RESTful API (Meets the Level 2 of the [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html))
- [ ] Documentation (all methods have basic documentation)
- [ ] Unit testing (> 80% coverage)
- [ ] SQL Data Persistance (3 tables; all 3NF)
- [ ] Filter by authors (added)
- [ ] Commenting system (added)

## Tech Stack
- [ ] TypeScript
- [ ] PostGreSQL
- [ ] node-postgre
- [ ] Express
- [ ] Jest
- [ ] Git SCM (on GitHub)

## Init Instructions
- npm install
- npm install express body-parser

## Postman
- running on localhost:3000

Authors:
1. View all users: /authors
2. Create new author: /authors
3. Update author: /authors
4. Delete my account: /authors/id
5. View all users: /authors

Posts:
1. View all post's: /posts
2. Create article: /posts
3. Update article: /posts 
4. Delete article: /posts/id
5. View all post's: /posts
6. View All Peter's articles: /posts/authors/id
7. View PETER post by title: /posts/id  

Comments:
1. View all comments by post: /comments/posts/id 
2. Create a comment :/comments 
3. Update my comment :/comments
4. Delete my comment :/comments/id
5. View all comments: /comments

## View Test Coverage
- coverage/icon-report/index.html