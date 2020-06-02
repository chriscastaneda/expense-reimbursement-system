import { dbConnection } from '../daos/db';
import { Type, TypeRow } from '../models/Type';
/**Query logic */

/**Retrieve all */
export async function getAllTypes(): Promise<Type[]> {
    const sql = 'SELECT * FROM ers_reimbursement_type';

    const result = await dbConnection.query<TypeRow>(sql, []);
    return result.rows.map(Type.from);
};

/**Retrieve by id */
export async function getTypeById(id: number): Promise<Type> {
    const sql = 'SELECT * FROM ers_reimbursement_type WHERE id = $1';
    
    const result = await dbConnection.query<TypeRow>(sql, [id]);
    return result.rows.map(Type.from)[0];
};

/**Create */
export async function saveType(type: Type): Promise<Type> {
    const sql = `INSERT INTO ers_reimbursement_type (reimb_type) \
                VALUES ($1) RETURNING *`;

    const result = await dbConnection.query<TypeRow>(sql, [
        type.reimburseType
    ]);

    return result.rows.map(Type.from)[0];
};

/**Update */
export async function patchType(type: Type): Promise<Type> {
    const sql = `UPDATE ers_reimbursement_type SET \
                reimb_type = COALESCE($2, reimb_type) \
                WHERE id = $1 RETURNING *`;

    const result = await dbConnection.query<TypeRow>(sql, [
        type.id,
        type.reimburseType
    ]);

    return result.rows.map(Type.from)[0];
};

/**Delete */
export async function deleteTypeById(id: number): Promise<Type> {
    const sql = `DELETE FROM ers_reimbursement_type WHERE id = $1 RETURNING *`;

    const result = await dbConnection.query<TypeRow>(sql, [id]);
    return result.rows.map(Type.from)[0];
};