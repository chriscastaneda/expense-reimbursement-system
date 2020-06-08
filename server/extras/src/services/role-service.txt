import { Role } from '../models/Role';
import * as roleDao from '../daos/role-dao';
/**Applicaiton Logic */

/**Read All */
export function getAllRoles(): Promise<Role[]> {
    return roleDao.getAllRoles();
};

/**Read by id */
export function getRoleById(id: number): Promise<Role> {
    return roleDao.getRoleById(id);
};

/**Create */
export function saveRole(role: any): Promise<Role> {
    const newRole = new Role(
        undefined, //set undefined id to prevent sql injection
        role.userRole
    );

    // Validate new role properties
    if (role.userRole) {
        return roleDao.saveRole(newRole);
    } else {
        //console.log('Role invalid');
        return new Promise((resolve, reject) => reject(422));
    };
};

/**Update */
export function patchRole(properties: any): Promise<Role> {
    const role = new Role(
        properties.id,
        properties.userRole
    );

    if(!role.id){
        throw new Error('400');
    }else{
        return roleDao.patchRole(role);
    }
};

/**Delete */
export function deleteRoleById(id: number): Promise<Role> {
    return roleDao.deleteRoleById(id);
};