# Expense Reimbursement System (ERS)
The Expense Reimbursement System (ERS) will manage the process of reimbursing employees for expenses incurred while on company time. All employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and past history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.

**Subject:**
- login 
- token Authentication
- Peer-to-peer interaction
- image uploading

**Live Demo:** http://s3-expense-reimbursement-system.s3-us-west-1.amazonaws.com/index.html

**Project Preview:**
[![Demo](https://github.com/chriscastaneda/rev-p1-expense-reimbursement-system/blob/master/assets/img/demo_snip.PNG)](https://drive.google.com/file/d/1oSlsYX0GcenCaFCzxPvDs2pmb5mroEO3/view?usp=sharing)

## Features
- Documentation (all methods have basic documentation)
- Server Unit testing (> 80% coverage)
- Client Unit testing (> 50% coverage)
- SQL Data Persistance (3 tables; all 3NF)
- Authenitcation (JWT)
- Image Storing (AWS-S3)

### Tech Stack:
- [x] PostGreSQL
- [x] Node-Postgre (AWS-RDS)
- [x] AWS-S3
- [x] Express
- [x] JWT Authentication
- [x] TypeScript
- [x] React
- [x] CSS Bootstrap, Material-ui, Semantic-ui
- [x] Jest/Enzyme
- [x] Git SCM (on GitHub)

## Login instructions
1. Refer to video above for website features. 
2. Enter any default account options below to sign-in to live demo.

<div id="anchor">

#### Default accounts:

</div> 

```diff
- Employee:
    username: EmployeeUser
    password: 1234

- Finance Manager:
    username: ManagerUser
    password: 5678
```

## Init Instructions
- install node 6.14.4 or higher

### Server - Express
- _cd server/_ npm install
- npm start

### Client - React JS
- _cd client/_ npm install
- npm start


### Test Coverage
  - npm test
  - view results in browser: coverage/icon-report/index.html

