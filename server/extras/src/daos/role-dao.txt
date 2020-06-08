import { dbConnection } from '../daos/db';
import { Role, RoleRow } from '../models/Role';
/**Query logic */

/**Retrieve all */
export async function getAllRoles(): Promise<Role[]> {
    const sql = 'SELECT * FROM ers_user_roles';

    const result = await dbConnection.query<RoleRow>(sql, []);
    return result.rows.map(Role.from);
};

/**Retrieve by id */
export async function getRoleById(id: number): Promise<Role> {
    const sql = 'SELECT * FROM ers_user_roles WHERE id = $1';
    
    const result = await dbConnection.query<RoleRow>(sql, [id]);
    return result.rows.map(Role.from)[0];
};

/**Create */
export async function saveRole(role: Role): Promise<Role> {
    const sql = `INSERT INTO ers_user_roles (user_role) \
                VALUES ($1) RETURNING *`;

    const result = await dbConnection.query<RoleRow>(sql, [
        role.userRole
    ]);

    return result.rows.map(Role.from)[0];
};

/**Update */
export async function patchRole(role: Role): Promise<Role> {
    const sql = `UPDATE ers_user_roles SET \
                user_role = COALESCE($2, user_role) \
                WHERE id = $1 RETURNING *`;

    const result = await dbConnection.query<RoleRow>(sql, [
        role.id,
        role.userRole
    ]);

    return result.rows.map(Role.from)[0];
};

/**Delete */
export async function deleteRoleById(id: number): Promise<Role> {
    const sql = `DELETE FROM ers_user_roles WHERE id = $1 RETURNING *`;

    const result = await dbConnection.query<RoleRow>(sql, [id]);
    return result.rows.map(Role.from)[0];
};