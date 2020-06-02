import { Type } from '../models/Type';
import * as typeDao from '../daos/type-dao';
/**Applicaiton Logic */

/**Read All */
export function getAllTypes(): Promise<Type[]> {
    return typeDao.getAllTypes();
};

/**Read by id */
export function getTypeById(id: number): Promise<Type> {
    return typeDao.getTypeById(id);
};

/**Create */
export function saveType(type: any): Promise<Type> {
    const newType = new Type(
        undefined, //set undefined id to prevent sql injection
        type.reimburseType
    );

    // Validate new type properties
    if (type.reimburseType) {
        return typeDao.saveType(newType);
    } else {
        console.log('Type invalid serive');
        return new Promise((resolve, reject) => reject(422));
    };
};

/**Update */
export function patchType(properties: any): Promise<Type> {
    const type = new Type(
        properties.id,
        properties.reimburseType
    );

        if(!type.id){
            throw new Error('400');
        }else{
            return typeDao.patchType(type);
        }
    };
    

/**Delete */
export function deleteTypeById(id: number): Promise<Type> {
    return typeDao.deleteTypeById(id);
};