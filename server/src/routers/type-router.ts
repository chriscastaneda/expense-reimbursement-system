import express from 'express';
import * as typeService from '../services/type-service';
import { Type } from '../models/Type';
/**CRUD logic */

export const typeRouter = express.Router();

/**Read All Types */
typeRouter.get('', async(request, response, next)=> {
    let types: Type[];
    
    try{
        types = await typeService.getAllTypes();
        response.json(types);
    }catch(err){
        response.sendStatus(500);
        return;
    }
    next();
});

/**Read by id */
typeRouter.get('/:id', async(request, response, next)=> {
    const id = parseInt(request.params.id);
    let type: Type;

    try {
        type = await typeService.getTypeById(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!type) {
        response.sendStatus(404);
    } else {
        response.json(type);
    }
    next();
 });
 
/**Create */
 typeRouter.post('', async(request, response, next)=> {
    const type = request.body;
    let newType: Type
    try {
        newType = await typeService.saveType(type);
        response.status(201);
        response.json(newType);
    } catch (err) {
        console.log('Type router invalid');
        response.sendStatus(500);
        return;
    }
    next();
 });
 
/**Update */
typeRouter.patch('', async(request, response, next)=> {
    const type = request.body;
    let updatedType: Type;

    try {
        updatedType = await typeService.patchType(type);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!updatedType) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(updatedType);
    }
    next();
 });
 
 /**Delete */
 typeRouter.delete('/:id', async(request, response, next)=> {
    const id = parseInt(request.params.id);
    let deletedType: Type;

    try {
        deletedType = await typeService.deleteTypeById(id);
    } catch (err) {
        response.sendStatus(500);
    }

    if(!deletedType) {
        response.status(404);
    } else {
        response.status(200);
        response.json(deletedType);
    }
    next();
 });