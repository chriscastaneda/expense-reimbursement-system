// import express from 'express';
// import * as reimburseService from '../services/reimburse-service';
// import { Reimburse } from '../models/Reimburse';
// /**CRUD logic */

// export const reimburseRouter = express.Router();

// /**Read All Reimburses */
// reimburseRouter.get('', async(request, response, next)=> {
//     let reimburses: Reimburse[];
    
//     try{
//         reimburses = await reimburseService.getAllReimburse();
//         response.json(reimburses);
//     }catch(err){
//         response.sendStatus(500);
//         return;
//     }
//     next();
// });

// /**Read by id */
// reimburseRouter.get('/:id', async(request, response, next)=> {
//     const id = parseInt(request.params.id);
//     let reimburse: Reimburse;

//     try {
//         reimburse = await reimburseService.getReimburseById(id);
//     } catch (err) {
//         response.sendStatus(500);
//         return;
//     }

//     if (!reimburse) {
//         response.sendStatus(404);
//     } else {
//         response.json(reimburse);
//     }
//     next();
//  });
 
// /**Create */
//  reimburseRouter.post('', async(request, response, next)=> {
//     const reimburse = request.body;
//     let newReimburse: Reimburse
//     try {
//         newReimburse = await reimburseService.saveReimburse(reimburse);
//         response.status(201);
//         response.json(newReimburse);
//     } catch (err) {
//         response.sendStatus(500);
//         return;
//     }
//     next();
//  });
 
// /**Update */
// reimburseRouter.patch('', async(request, response, next)=> {
//     const reimburse = request.body;
//     let updatedReimburse: Reimburse;

//     try {
//         updatedReimburse = await reimburseService.patchReimburse(reimburse);
//     } catch (err) {
//         response.sendStatus(500);
//         return;
//     }

//     if (!updatedReimburse) {
//         response.sendStatus(404);
//     } else {
//         response.status(200);
//         response.json(updatedReimburse);
//     }
//     next();
//  });
 
//  /**Delete */
//  reimburseRouter.delete('/:id', async(request, response, next)=> {
//     const id = parseInt(request.params.id);
//     let deletedReimburse: Reimburse;

//     try {
//         deletedReimburse = await reimburseService.deleteReimburseById(id);
//     } catch (err) {
//         response.sendStatus(500);
//     }

//     if(!deletedReimburse) {
//         response.status(404);
//     } else {
//         response.status(200);
//         response.json(deletedReimburse);
//     }
//     next();
//  });