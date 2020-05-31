import { User } from '../models/User';
import * as userDao from '../daos/user-dao';
/**Applicaiton Logic */

/**Read All */
export function getAllUsers(): Promise<User[]> {
    return userDao.getAllUsers();
};

/**Read by id */
export function getUserById(id: number): Promise<User> {
    return userDao.getUserById(id);
};

/**Create */
export function saveUser(user: any): Promise<User> {
    const newUser = new User(
        undefined, //set undefined id to prevent sql injection
        user.userName,
        user.password,
        user.firstName,
        user.lastName,
        user.email,
        undefined //!Fix Here? user.roleId
    );

    // Validate new user properties
    if (user.userName && user.password && user.firstName && user.lastName && user.email) {
        return userDao.saveUser(newUser);
    } else {
        //console.log('User invalid');
        return new Promise((resolve, reject) => reject(422));
    };
};

/**Update */
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

/**Delete */
export function deleteUserById(id: number): Promise<User> {
    return userDao.deleteUserById(id);
};