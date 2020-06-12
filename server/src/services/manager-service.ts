import { Dashboard } from '../models/Dashboard';
import { Pending } from '../models/MangerPending';
import { ApprovalPatch } from '../models/ApprovalPatch';
import * as managerDao from '../daos/manager-dao';
import { ApprovalRead } from '../models/ApprovalRead';
/**Applicaiton Logic */

/**Dashboard: Read All tickets */
export function getAllDashboards(): Promise<Dashboard[]> {
    return managerDao.getAllDashboards();
};


/**Pending: Read All */
export function getAllPendings(): Promise<Pending[]> {
    return managerDao.getAllPendings();
};

/**Dashboard: Retrieve by id */
export function getUserById(id: number): Promise<Dashboard> {
    return managerDao.getStatusById(id);
};

/**Approve Reimbursemnet: Update */
export function patchApproval(properties: any): Promise<ApprovalPatch> {
    
    // const sumitDate = properties.sumitDate && new Date(properties.sumitDate);
    // const resolvedDate = properties.resolvedDate && new Date(properties.resolvedDate);

    const approval = new ApprovalPatch(
        properties.reimbId,
        properties.amount,
        properties.sumitDate,
        properties.resolvedDate,
        properties.description,
        properties.reciept,
        properties.authorId,
        properties.resolverId,
        properties.statusId,
        properties.type
    );

    if(!approval.reimbId){
        throw new Error('400');
    }else{
        return managerDao.patchApproval(approval);
    }
};


/**Approve Reimbursemnet: Read All updated */
export function getApprovalById(): Promise<ApprovalRead[]> {
    return managerDao.getApprovalById();
};









/**Approve Reimbursemnet: Read updated by id 
export function getApprovalById(id: number): Promise<ApprovalRead> {
    return managerDao.getApprovalById(id);
};
*/

/*
//Read by id 
export function getUserById(id: number): Promise<User> {
    return userDao.getUserById(id);
};

//Create 
export function saveUser(user: any): Promise<User> {
    const newUser = new User(
        undefined, //set undefined id to prevent sql injection
        user.userName,
        user.password,
        user.firstName,
        user.lastName,
        user.email,
        undefined //!Fix Here? roleId
    );

    // Validate new user properties
    if (user.userName && user.password && user.firstName && user.lastName && user.email) {
        return userDao.saveUser(newUser);
    } else {
        console.log('User service invalid');
        return new Promise((resolve, reject) => reject(422));
    };
};

//Update 
export function patchUser(properties: any): Promise<User> {
    const user = new User(
        properties.id,
        properties.userName,
        properties.password,
        properties.firstName,
        properties.lastName,
        properties.email,
        properties.roleId
    );

    if(!user.id){
        throw new Error('400');
    }else{
        return userDao.patchUser(user);
    }
};

//Delete 
export function deleteUserById(id: number): Promise<User> {
    return userDao.deleteUserById(id);
};*/