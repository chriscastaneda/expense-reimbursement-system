// import { Reimburse } from '../models/Reimburse';
// import * as reimburseDao from '../daos/reimburse-dao';
// /**Applicaiton Logic */

// /**Read All */
// export function getAllReimburse(): Promise<Reimburse[]> {
//     return reimburseDao.getAllReimburse();
// };

// /**Read by id */
// export function getReimburseById(id: number): Promise<Reimburse> {
//     return reimburseDao.getReimburseById(id);
// };

// /**Create */
// export function saveReimburse(reimburse: any): Promise<Reimburse> {
//     const newReimburse = new Reimburse(
//         undefined, //set undefined id to prevent sql injection
//         reimburse.amount,
//         reimburse.sumitted,
//         reimburse.resolved,
//         reimburse.description,
//         reimburse.reciept,
//         undefined,
//         undefined,
//         undefined,
//         undefined //!Fix Here?
//     );

//     // Validate new reimburse properties
//     if (reimburse.amount && reimburse.sumitted && reimburse.resolved && reimburse.description && reimburse.reciept) {
//         return reimburseDao.saveReimburse(newReimburse);
//     } else {
//         //console.log('Reimburse invalid');
//         return new Promise((resolve, reject) => reject(422));
//     };
// };

// /**Update */
// export function patchReimburse(properties: any): Promise<Reimburse> {
//     const reimburse = new Reimburse(
//         properties.id,
//         properties.amount,
//         properties.sumitted,
//         properties.resolved,
//         properties.description,
//         properties.reciept,
//         properties.authorId,
//         properties.resolverId,
//         properties.statusId,
//         properties.typeId
//     );

//     if(!reimburse.id){
//         throw new Error('400');
//     }else{
//         return reimburseDao.patchReimburse(reimburse);
//     }
// };

// /**Delete */
// export function deleteReimburseById(id: number): Promise<Reimburse> {
//     return reimburseDao.deleteReimburseById(id);
// };