import express from 'express';
import * as userService from '../services/user-service';
import { User } from '../models/User';
import * as authenticateJWT from './authenticate-router'; //!NEW LOGIN CODE
/**CRUD logic */

export const userRouter = express.Router();

/**Read All Users */  //authenticateJWT.authenticateJWT, async
userRouter.get('',  async(request, response, next)=> { //!NEW LOGIN CODE
    let users: User[];
    
    try{
        users = await userService.getAllUsers();
        response.json(users);
    }catch(err){
        response.sendStatus(500);
        return;
    }
    next();
});

/**Read by id */
userRouter.get('/:id', async(request, response, next)=> {
    const id = parseInt(request.params.id);
    let user: User;

    try {
        user = await userService.getUserById(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!user) {
        response.sendStatus(404);
    } else {
        response.json(user);
    }
    next();
 });
 
/**Create */
 userRouter.post('', async(request, response, next)=> {
    const user = request.body;

    let newUser: User;

    try {
        newUser = await userService.saveUser(console.log(user));
        response.status(201);
        response.json(newUser);
    } catch (err) {
        response.sendStatus(500);
        return;
    }
    next();
 });
 
/**Update */
 userRouter.patch('', async(request, response, next)=> {
    const user = request.body;
    let updatedUser: User;

    try {
        updatedUser = await userService.patchUser(user);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!updatedUser) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(updatedUser);
    }
    next();
 });
 
 /**Delete */
 userRouter.delete('/:id', async(request, response, next)=> {
    const id = parseInt(request.params.id);
    let deletedUser: User;

    try {
        deletedUser = await userService.deleteUserById(id);
    } catch (err) {
        response.sendStatus(500);
    }

    if(!deletedUser) {
        response.status(404);
    } else {
        response.status(200);
        response.json(deletedUser);
    }
    next();
 });