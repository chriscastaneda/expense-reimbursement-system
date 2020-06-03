import { dbConnection } from '../daos/db';
import { Status, StatusRow } from '../models/Status';
/**Query logic */

/**Retrieve all */
export async function getAllStatuses(): Promise<Status[]> {
    const sql = 'SELECT * FROM ers_reimbursement_status';

    const result = await dbConnection.query<StatusRow>(sql, []);
    return result.rows.map(Status.from);
};

/**Retrieve by id */
export async function getStatusById(id: number): Promise<Status> {
    const sql = 'SELECT * FROM ers_reimbursement_status WHERE id = $1';
    
    const result = await dbConnection.query<StatusRow>(sql, [id]);
    return result.rows.map(Status.from)[0];
};

/**Create */
export async function saveStatus(status: Status): Promise<Status> {
    const sql = `INSERT INTO ers_reimbursement_status (reimb_status) \
                VALUES ($1) RETURNING *`;

    const result = await dbConnection.query<StatusRow>(sql, [
        status.reimburseStatus
    ]);

    return result.rows.map(Status.from)[0];
};

/**Update */
export async function patchStatus(status: Status): Promise<Status> {
    const sql = `UPDATE ers_reimbursement_status SET \
                reimb_status = COALESCE($2, reimb_status) \
                WHERE id = $1 RETURNING *`;

    const result = await dbConnection.query<StatusRow>(sql, [
        status.id,
        status.reimburseStatus
    ]);

    return result.rows.map(Status.from)[0];
};

/**Delete */
export async function deleteStatusById(id: number): Promise<Status> {
    const sql = `DELETE FROM ers_reimbursement_status WHERE id = $1 RETURNING *`;

    const result = await dbConnection.query<StatusRow>(sql, [id]);
    return result.rows.map(Status.from)[0];
};