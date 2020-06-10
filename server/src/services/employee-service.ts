import { Dashboard } from '../models/Dashboard';
import { Pending } from '../models/EmployeePending';
import { Reimburse } from '../models/Reimburse';
import * as employeeDao from '../daos/employee-dao';
/**Applicaiton Logic */

/**Dashboard: Read All tickets */
export function getAllDashboards(): Promise<Dashboard[]> {
    return employeeDao.getAllDashboards();
};


/**Pending: Read All */
export function getAllPendings(): Promise<Pending[]> {
    return employeeDao.getAllPendings();
};


/**Add Reimbursemnet: Create */
export function saveReimbursement(reimburse: any): Promise<Reimburse> {
    
    
    const newReimburse = new Reimburse(
        undefined,
        reimburse.amount,
        new Date(reimburse.sumitDate),
        new Date(reimburse.resolvedDate),
        reimburse.description,
        reimburse.reciept,
        reimburse.authorId,
        reimburse.resolverId,
        reimburse.statusId,
        reimburse.type
    );

    // Validate new Reimburse properties
    if (reimburse.amount && reimburse.sumitDate && reimburse.resolvedDate 
        && reimburse.description && reimburse.reciept && reimburse.authorId 
        && reimburse.resolverId && reimburse.statusId && reimburse.type) {

        return employeeDao.saveReimbursement(newReimburse);
    } else {
        console.log('Reimburse service invalid');
        return new Promise((resolve, reject) => reject(422));
    };
};








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