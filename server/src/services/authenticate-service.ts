import { Authenticate } from '../models/Authenticate';
import * as employeeDao from '../daos/authenticate-dao';


export function VerifyLoginCredential(properties: any): Promise<Authenticate> {
    const authenticate = new Authenticate(
        properties.userName,
        properties.userPassword,
        properties.userID,
        properties.roleID
    );
    // console.log('Service', authenticate)
    if (properties.userName && properties.userPassword) {

        return employeeDao.VerifyLoginCredential(authenticate);
    } else {
        console.log('service rejected')
        return new Promise((resolve, reject) => reject(422));
    };
};