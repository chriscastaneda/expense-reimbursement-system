import express from 'express';
import * as managerService from '../services/manager-service';
import { Dashboard } from '../models/Dashboard';
import { Pending } from '../models/MangerPending';
import { ApprovalPatch } from '../models/ApprovalPatch';
import * as authenticateJWT from './authenticate-router'; //!NEW LOGIN CODE
import { ApprovalRead } from '../models/ApprovalRead';
/**CRUD logic */

export const managerRouter = express.Router();

/**Dashboard: Read All tickets */  //authenticateJWT.authenticateJWT, async
managerRouter.get('/dashboard',  async(request, response, next)=> { //!NEW LOGIN CODE
    let dashboards: Dashboard[];
    
    try{
        dashboards = await managerService.getAllDashboards();
        response.json(dashboards);
    }catch(err){
        response.sendStatus(500);
        return;
    }
    next();
});

/**Dashboard: Retrieve by id */
managerRouter.get('/filter/:id', async(request, response, next)=> {
    const id = parseInt(request.params.id);
    let user: Dashboard;

    try {
        user = await managerService.getUserById(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!user) {
        // console.log(user)
        response.sendStatus(404);
    } else {
        response.json(user);
    }
    next();
 });

/**Pending: Read all*/
managerRouter.get('/pending',  async(request, response, next)=> { //!NEW LOGIN CODE
    let pendings: Pending[];
    
    try{
        // console.log('Pending Router');
        pendings = await managerService.getAllPendings();
        response.json(pendings);
    }catch(err){
        response.statusMessage;
        // console.log(err, 'Pending Router');
        response.sendStatus(500);
        return;
    }
    next();
});


/**Approve Reimbursemnet: Update */
managerRouter.patch('/approvals', async(request, response, next)=> {
    const approval = request.body;
    let updatedApproval: ApprovalPatch;

    try {
        updatedApproval = await managerService.patchApproval(approval);
    } catch (err) {
        response.sendStatus(500);
        console.log('Router PATCH ERROR', err);
        return;
    }

    if (!updatedApproval) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(updatedApproval);
    }
    next();
 });
 

/**Approve Reimbursemnet: Read All */
managerRouter.get('/requests',  async(request, response, next)=> { //!NEW LOGIN CODE
    let approval: ApprovalRead[];
    
    try{
        // console.log('Pending Router');
        approval = await managerService.getApprovalById();
        response.json(approval);
    }catch(err){
        response.statusMessage;
        // console.log(err, 'Pending Router');
        response.sendStatus(500);
        return;
    }
    next();
});



 /**Approve Reimbursemnet: Read updated by id 
managerRouter.get('/requesting/:id', async(request, response, next)=> {
    const id = parseInt(request.params.id);
    let approval: ApprovalRead;

    try {
        approval = await managerService.getApprovalById(id);
        console.log(approval);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
        return;
    }

    if (!approval) {
        // console.log(user)
        response.sendStatus(404);
    } else {
        response.json(approval);
    }
    next();
 });*/


/*

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