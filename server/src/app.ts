import express from 'express';
import bodyParser from  'body-parser';
import { dbConnection } from './daos/db';
import { employeeRouter } from './routers/employee-router'; 
import { authenticationRouter } from './routers/authenticate-router'; //!NEW LOGIN CODE
import { managerRouter } from './routers/manager-router';
import { userRouter } from './routers/user-router';

/**Initialize */
const app = express();
const port  = process.env.PORT || 3000;
app.set('port',port);//set port globably

/**CORS Middleware */
app.use((request, response, next)=> {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    response.setHeader('Access-Control-Allow-Headers', 'content-type, authorization');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT');
    
//     response.setHeader("Access-Control-Allow-Origin", "*");
// response.setHeader("Access-Control-Allow-Credentials", "true");
// response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
// response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    
    next();
});

/**Middeware */
// app.use(bodyParser.json());
app.use(bodyParser.json({
    limit: '50mb'
  }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true
  }));



/**Routers */
app.use('/employees', employeeRouter);
app.use('/managers', managerRouter);
app.use('/users', userRouter);
app.use('/authentication', authenticationRouter) //!NEW LOGIN CODE


/**Pool connection error handle */
process.on('unhandledRejection', () => {
    dbConnection.end().then(()=> {
        console.log('Database pool closed');
    });
});

/**Port Listener*/
app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});