import express from 'express';
import * as employeeService from '../services/employee-service';
import { Dashboard } from '../models/Dashboard';
import { Pending } from '../models/EmployeePending';
import { Reimburse } from '../models/Reimburse';
import * as authenticateJWT from './authenticate-router'; //!NEW LOGIN CODE
/**CRUD logic */

export const employeeRouter = express.Router();

/**Dashboard: Read All tickets */  //authenticateJWT.authenticateJWT, async
employeeRouter.get('/dashboard',  async(request, response, next)=> { 
    let dashboards: Dashboard[];
    
    try{
        dashboards = await employeeService.getAllDashboards();
        response.json(dashboards);
    }catch(err){
        console.log(err);
        response.sendStatus(500);
        return;
    }
    next();
});


/**Pending: Read all*/
employeeRouter.get('/pending',  async(request, response, next)=> { 
    let pendings: Pending[];
    
    try{
        pendings = await employeeService.getAllPendings();
        response.json(pendings);
    }catch(err){
        response.sendStatus(500);
        return;
    }
    next();
});


/**Add Reimbursemnet: Create */
employeeRouter.post('/reimburse', async(request, response, next)=> {
    const reimburse = request.body;
    console.log('IMAGE FILE', reimburse);

    let newReimburse: Reimburse;

    try {
        newReimburse = await employeeService.saveReimbursement(reimburse);
        response.status(201);
        response.json(newReimburse);
    } catch (err) {
        response.sendStatus(500);
        console.log('REimburse Router', err);
        return;
    }
    next();
 });

















/*
/**Add Reimbursemnet: Create Copy
employeeRouter.post('/reimburse', async(request, response, next)=> {
    const reimburse = request.body;

    let newReimburse: Reimburse;

    try {
        newReimburse = await employeeService.saveReimbursement(reimburse);
        response.status(201);
        response.json(newReimburse);
    } catch (err) {
        response.sendStatus(500);
        console.log('REimburse Router', err);
        return;
    }
    next();
 });











//Read by id *
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
 
//Create 
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
 
//Update 
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
 
 //Delete 
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
 });*/