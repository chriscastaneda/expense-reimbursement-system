import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { Authenticate } from '../models/Authenticate';
import * as authenticateService from '../services/authenticate-service';
/**Authentication Logic */

export const authenticationRouter = express.Router();
export const jwt = jsonwebtoken; 

const accessTokenSecret = 'somerandomaccesstoken'; //request handler to handle the user login request:
const refreshTokenSecret = 'yourrefreshtokensecrethere';
let refreshTokens = [];


//Express middleware that handles the authentication process
export const authenticateJWT = (request, response, next) => {
    const authHeader = request.headers.authorization; //read the value of the authorization header

    if (authHeader) {
        const token = authHeader.split(' ')[1]; //header has a value in the format of Bearer [JWT_TOKEN], we have split the value by the space and separated the token.

        jwt.verify(token, accessTokenSecret, (err, user) => { //verified the token with JWT.
            if (err) {
                console.log('protect function', err);
                return response.sendStatus(403);
            }

            request.user = user; //attach the user object into the request and continue.
            next();
        });
    } else {
        response.sendStatus(401);
    }
}


// login validation request & Token Generator
authenticationRouter.post('/login', async (request, response, next) => {
    const requestBody = request.body;  //get properties from request
    let modelCredentials: Authenticate;

    try {
        // console.log(requestBody);
        modelCredentials = await authenticateService.VerifyLoginCredential(requestBody);
    } catch (err) {
        console.log('Login Router error', err);
        response.sendStatus(500);
        return;
    }if (modelCredentials) {
        // Generate an access token
        const accessToken = jwt.sign({ username: modelCredentials.userName, role: modelCredentials.roleID, }, accessTokenSecret);

        /*const refreshToken = jwt.sign({ 
            username: modelCredentials.username,  role: modelCredentials.roleID }, refreshTokenSecret);*/

        //Update refreshTokens[]
       /* refreshTokens.push(refreshToken);*/

       const userName = modelCredentials.userName;
       const userPassword = modelCredentials.userPassword;
       const userID = modelCredentials.userID;
       const roleID = modelCredentials.roleID;
       console.log('ModelCredentails',modelCredentials);
        response.json({ 
            accessToken,
            userName,
            roleID
            /*refreshToken */
        });

    } else {
        response.sendStatus(401);
        console.log('Username or password are incorrect');
    };
    
    next();
});


// /* request handler that generated new tokens based on the refresh tokens: */
// authenticationRouter.post('/token', async (request, response, next) => {
//     const { token } = request.body; //get properties from request

   
//     if (!token) {
//         return response.sendStatus(401);
//     }

//     if (!refreshTokens.includes(token)) {
//         console.log('token function');
//         return response.sendStatus(403);
//     }

//     jwt.verify(token, refreshTokenSecret, (err, modelCredentials) => {
//         if (err) {
//             return response.sendStatus(403);
//         }

//         const accessToken = jwt.sign({ 
//             username: modelCredentials.username, role: modelCredentials.roleID }, accessTokenSecret, { expiresIn: '20m' });

//         response.json({
//             accessToken
//         });
//     });
// });


// //implement a simple logout
// authenticationRouter.delete('/logout', async (request, response, next) => {
//     const { token } = request.body; //get properties from request
    
//     try {
//         refreshTokens = refreshTokens.filter(token => token !== token);
//         response.send("Logout successful");
//         response.sendStatus(204);
//     } catch (err) {
//         console.log(err, '500 error');
//         response.sendStatus(500);
//         return;
//     };
// });