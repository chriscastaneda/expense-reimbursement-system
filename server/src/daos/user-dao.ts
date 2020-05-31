import { dbConnection } from '../daos/db';
import { User, UserRow } from '../models/User';
/**Query logic */

/**Retrieve all */
export async function getAllUsers(): Promise<User[]> {
    const sql = 'SELECT * FROM ers_users';

    const result = await dbConnection.query<UserRow>(sql, []);
    return result.rows.map(User.from);
};

/**Retrieve by id */
export async function getUserById(id: number): Promise<User> {
    const sql = 'SELECT * FROM ers_users WHERE id = $1';
    
    const result = await dbConnection.query<UserRow>(sql, [id]);
    return result.rows.map(User.from)[0];
};

/**Create */
export async function saveUser(user: User): Promise<User> {
    const sql = `INSERT INTO ers_users ( \
                ers_username, \
                ers_password, \
                user_first_name, \
                user_last_name, \
                user_email) \
                VALUES ($1, $2, $3, $4, $5) RETURNING *`;

    const result = await dbConnection.query<UserRow>(sql, [
        user.userName,
        user.password,
        user.firstName,
        user.lastName,
        user.email
    ]);

    return result.rows.map(User.from)[0];
};

/**Update */
export async function patchUser(user: User): Promise<User> {
    const sql = `UPDATE ers_users SET \
                ers_username = COALESCE($2, ers_username), \
                ers_password = COALESCE($3, ers_password), \
                user_first_name = COALESCE($4, user_first_name), \
                user_last_name = COALESCE($5, user_last_name), \
                user_email = COALESCE($6, user_email), \
                user_role_id = COALESCE($7, user_role_id) \
                WHERE id = $1 RETURNING *`;

    const result = await dbConnection.query<UserRow>(sql, [
        user.id,
        user.userName,
        user.password,
        user.firstName,
        user.lastName,
        user.email,
        user.roleId
    ]);

    return result.rows.map(User.from)[0];
};

/**Delete */
export async function deleteUserById(id: number): Promise<User> {
    const sql = `DELETE FROM ers_users WHERE id = $1 RETURNING *`;

    const result = await dbConnection.query<UserRow>(sql, [id]);
    return result.rows.map(User.from)[0];
};