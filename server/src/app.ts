import express from 'express';
import bodyParser from  'body-parser';
import { dbConnection } from './daos/db';
import { userRouter } from './routers/user-router'; 
import { reimburseRouter } from './routers/reimburse-router'; 
import { authenticationRouter } from './routers/authenticate-router'; //!NEW LOGIN CODE

/**Initialize */
const app = express();
const port  = process.env.PORT || 3000;
app.set('port',port);//set port globably

/**CORS Middleware */
app.use((request, response, next)=> {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    response.setHeader('Access-Control-Allow-Headers', 'content-type');
    response.setHeader('Access-Control-Allow-Methods', 'GET POST');
    next();
});

/**Middeware */
app.use(bodyParser.json());

/**Routers */
app.use('/users', userRouter);
app.use('/reimbursements', reimburseRouter);
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