# Expense Reimbursement System (ERS)
The Expense Reimbursement System (ERS) will manage the process of reimbursing employees for expenses incurred while on company time. All employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and past history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.

**Subject:**
- login 
- token Authentication
- Peer-to-peer interaction
- image uploading

Demo:
[![Demo](https://github.com/chriscastaneda/rev-p3-stackoverflow/blob/master/demo_snip.PNG)](https://drive.google.com/file/d/1BLASWSgBj68wFKGgZ9Nf1D_zzBa0_9Wc/view?usp=sharing)

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

## Init Instructions
- install node 6.14.4 or higher

### Server - Express
- _server/_ npm install
- npm start

### Client - React
- _client/_ npm install
- npm start

<div id="anchor">

#### + Default accounts:
```
Employee:
-username: EmployeeUser
-password: 1234

Finance Manager: 
-username: ManagerUser
-password: 5678
```

</div>

### Test Coverage
  - npm test
  - view in browser: coverage/icon-report/index.html
