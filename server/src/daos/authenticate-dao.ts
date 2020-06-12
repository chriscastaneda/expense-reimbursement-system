import { dbConnection } from '../daos/db';
import { Authenticate, AuthenticateRow } from '../models/Authenticate';
/**Query Logic */


/**Verify User from database*/
interface verfiyUser {
    exists: boolean;
};
export async function authenticateUser(userName: string): Promise<boolean> {
    const sql = `SELECT EXISTS( \
                SELECT ers_username FROM ers_users \
                WHERE ers_username = $1)`;
    const result = await dbConnection.query<verfiyUser>(sql, [userName]);
    return result.rows[0].exists;
};

/**Verify Authentication */
export async function VerifyLoginCredential(authenticate: Authenticate): Promise<Authenticate> {
    const userExists: boolean = await authenticateUser(authenticate.userName);
    if (!userExists) {
        return undefined;
    };

    const sql = `SELECT ers_username, ers_password, user_id, user_role_id  \
                FROM ers_users \
                LEFT JOIN ers_user_roles ON user_id = user_roles_id \
                WHERE ers_users.ers_username = $1`;
 
    const result = await dbConnection.query<AuthenticateRow>(sql, [
        authenticate.userName
    ]);

    return  result.rows.map(Authenticate.from)[0];
};