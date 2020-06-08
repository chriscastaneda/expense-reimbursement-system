import express from 'express';
import * as roleService from '../services/role-service';
import { Role } from '../models/Role';
/**CRUD logic */

export const roleRouter = express.Router();

/**Read All Roles */
roleRouter.get('', async(request, response, next)=> {
    let roles: Role[];
    
    try{
        roles = await roleService.getAllRoles();
        response.json(roles);
    }catch(err){
        response.sendStatus(500);
        return;
    }
    next();
});

/**Read by id */
roleRouter.get('/:id', async(request, response, next)=> {
    const id = parseInt(request.params.id);
    let role: Role;

    try {
        role = await roleService.getRoleById(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!role) {
        response.sendStatus(404);
    } else {
        response.json(role);
    }
    next();
 });
 
/**Create */
 roleRouter.post('', async(request, response, next)=> {
    const role = request.body;
    let newRole: Role
    try {
        newRole = await roleService.saveRole(role);
        response.status(201);
        response.json(newRole);
    } catch (err) {
        response.sendStatus(500);
        return;
    }
    next();
 });
 
/**Update */
 roleRouter.patch('', async(request, response, next)=> {
    const role = request.body;
    let updatedRole: Role;

    try {
        updatedRole = await roleService.patchRole(role);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!updatedRole) {
        response.sendStatus(404);
    } else {
        response.status(200);
        response.json(updatedRole);
    }
    next();
 });
 
 /**Delete */
 roleRouter.delete('/:id', async(request, response, next)=> {
    const id = parseInt(request.params.id);
    let deletedRole: Role;

    try {
        deletedRole = await roleService.deleteRoleById(id);
    } catch (err) {
        response.sendStatus(500);
    }

    if(!deletedRole) {
        response.status(404);
    } else {
        response.status(200);
        response.json(deletedRole);
    }
    next();
 });