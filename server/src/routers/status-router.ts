import express from 'express';
import * as statusService from '../services/status-service';
import { Status } from '../models/Status';
/**CRUD logic */

export const statusRouter = express.Router();

/**Read All Status */
statusRouter.get('', async(request, response, next)=> {
    let statuses: Status[];
    
    try{
        statuses = await statusService.getAllStatuses();
        response.json(statuses);
    }catch(err){
        response.sendStatus(500);
        return;
    }
    next();
});

/**Read by id */
statusRouter.get('/:id', async(request, response, next)=> {
    const id = parseInt(request.params.id);
    let status: Status;

    try {
        status = await statusService.deleteStatusById(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!status) {
        response.sendStatus(404);
    } else {
        response.json(status);
    }
    next();
 });
 
/**Create */
 statusRouter.post('', async(request, response, next)=> {
    const status = request.body;
    let newStatus: Status
    try {
        newStatus = await statusService.saveStatus(status);
        response.status(201);
        response.json(newStatus);
    } catch (err) {
        console.log(err,'Status router invalid');
        response.sendStatus(500);
        return;
    }
    next();
 });
 
/**Update */
statusRouter.patch('', async(request, response, next)=> {
    const status = request.body;
    let updatedStatus: Status;

    try {
        updatedStatus = await statusService.patchStatus(status);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!updatedStatus) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(updatedStatus);
    }
    next();
 });
 
 /**Delete */
 statusRouter.delete('/:id', async(request, response, next)=> {
    const id = parseInt(request.params.id);
    let deletedStatus: Status;

    try {
        deletedStatus = await statusService.deleteStatusById(id);
    } catch (err) {
        //console.log(err)
        response.sendStatus(500);
    }

    if(!deletedStatus) {
        response.status(404);
    } else {
        response.status(200);
        response.json(deletedStatus);
    }
    next();
 });