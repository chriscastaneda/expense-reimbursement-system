import { Authenticate } from '../models/Authenticate';
import * as employeeDao from '../daos/authenticate-dao';


export function VerifyLoginCredential(properties: any): Promise<Authenticate> {
    const authenticate = new Authenticate(
        properties.username,
        properties.userPassword,
        properties.userRole
    );
    
    if (properties.username && properties.userPassword) {

        return employeeDao.VerifyLoginCredential(authenticate);
    } else {
        return new Promise((resolve, reject) => reject(422));
    };
};