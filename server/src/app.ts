import express from 'express';
import bodyParser from  'body-parser';
import { dbConnection } from './daos/db';
import { userRouter } from './routers/user-router'; 
import { reimburseRouter } from './routers/reimburse-router'; 
import { roleRouter } from './routers/role-router'; 
import { typeRouter } from './routers/type-router';
import { statusRouter } from './routers/status-router';


import { authenticationRouter } from './routers/authenticate-router'; //!NEW LOGIN CODE

/**Initialize */
const app = express();
const port  = process.env.PORT || 3000;
app.set('port',port);//set port globably

/**Middeware */
app.use(bodyParser.json());

/**Routers */
app.use('/users', userRouter);
app.use('/reimbursements', reimburseRouter);
app.use('/roles', roleRouter);
app.use('/types', typeRouter);
app.use('/status', statusRouter);


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