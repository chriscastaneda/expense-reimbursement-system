import { Status } from '../models/Status';
import * as statusDao from '../daos/status-dao';
/**Applicaiton Logic */

/**Read All */
export function getAllStatuses(): Promise<Status[]> {
    return statusDao.getAllStatuses();
};

/**Read by id */
export function getStatusById(id: number): Promise<Status> {
    return statusDao.getStatusById(id);
};

/**Create */
export function saveStatus(status: any): Promise<Status> {
    const newStatus = new Status(
        undefined, //set undefined id to prevent sql injection
        status.reimburseStatus
    );

    // Validate new status properties
    if (status.reimburseStatus) {
        return statusDao.saveStatus(newStatus);
    } else {
        console.log('Status invalid serive');
        return new Promise((resolve, reject) => reject(422));
    };
};

/**Update */
export function patchStatus(properties: any): Promise<Status> {
    const status = new Status(
        properties.id,
        properties.reimburseStatus
    );

        if(!status.id){
            throw new Error('400');
        }else{
            return statusDao.patchStatus(status);
        }
    };
    

/**Delete */
export function deleteStatusById(id: number): Promise<Status> {
    return statusDao.deleteStatusById(id);
};