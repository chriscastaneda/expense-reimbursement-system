import { dbConnection } from '../daos/db';
import { Reimburse, ReimburseRow } from '../models/Reimburse';
/**Query logic */

/**Retrieve all */
export async function getAllReimburse(): Promise<Reimburse[]> {
    const sql = 'SELECT * FROM ers_reimbursement';

    const result = await dbConnection.query<ReimburseRow>(sql, []);
    return result.rows.map(Reimburse.from);
};

/**Retrieve by id */
export async function getReimburseById(id: number): Promise<Reimburse> {
    const sql = 'SELECT * FROM ers_reimbursement WHERE id = $1';
    
    const result = await dbConnection.query<ReimburseRow>(sql, [id]);
    return result.rows.map(Reimburse.from)[0];
};

/**Create */
export async function saveReimburse(reimburse: Reimburse): Promise<Reimburse> {
    const sql = `INSERT INTO ers_reimbursement ( \
                reimb_amount, \
                reimb_sumitted, \
                reimb_resolved, \
                reimb_description, \
                reimb_reciept, \
                reimb_author, \
                reimb_resolver, \
                reimb_status_id, \
                reimb_type_id) \
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;

    const result = await dbConnection.query<ReimburseRow>(sql, [
        reimburse.amount,
        reimburse.sumitted,
        reimburse.resolved,
        reimburse.description,
        reimburse.reciept,
        reimburse.authorId,
        reimburse.resolverId,
        reimburse.statusId,
        reimburse.typeId
    ]);

    return result.rows.map(Reimburse.from)[0];
};

/**Update */
export async function patchReimburse(reimburse: Reimburse): Promise<Reimburse> {
    const sql = `UPDATE ers_reimbursement SET \
                reimb_amount = COALESCE($2, reimb_amount), \
                reimb_sumitted = COALESCE($3, reimb_sumitted), \
                reimb_resolved = COALESCE($4, reimb_resolved), \
                reimb_description = COALESCE($5, reimb_description), \
                reimb_reciept = COALESCE($6, reimb_reciept), \
                reimb_author = COALESCE($7, reimb_author), \
                reimb_resolver = COALESCE($8, reimb_resolver), \
                reimb_status_id = COALESCE($9, reimb_status_id), \
                reimb_type_id = COALESCE($10, reimb_type_id) \
                WHERE id = $1 RETURNING *`;

    const result = await dbConnection.query<ReimburseRow>(sql, [
        reimburse.id,
        reimburse.amount,
        reimburse.sumitted,
        reimburse.resolved,
        reimburse.description,
        reimburse.reciept,
        reimburse.authorId,
        reimburse.resolverId,
        reimburse.statusId,
        reimburse.typeId
    ]);

    return result.rows.map(Reimburse.from)[0];
};

/**Delete */
export async function deleteReimburseById(id: number): Promise<Reimburse> {
    const sql = `DELETE FROM ers_reimbursement WHERE id = $1 RETURNING *`;

    const result = await dbConnection.query<ReimburseRow>(sql, [id]);
    return result.rows.map(Reimburse.from)[0];
};