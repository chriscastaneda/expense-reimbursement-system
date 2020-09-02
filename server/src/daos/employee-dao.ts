/* istanbul ignore file */
import { dbConnection } from '../daos/db';
import { Dashboard, DashboardRow } from '../models/Dashboard';
import { Pending, PendingRow } from '../models/EmployeePending';
import { Reimburse, ReimburseRow } from '../models/Reimburse';
/**Query logic */

/**Dashboard: Read All tickets */
export async function getAllDashboards(): Promise<Dashboard[]> {
    const sql = 'SELECT \
                ers_reimbursement.reimb_id, \
                ers_reimbursement.reimb_amount, \
                ers_reimbursement.reimb_sumit_date, \
                ers_reimbursement.reimb_resolved_date, \
                ers_reimbursement.reimb_description, \
                \
                ers_users.user_first_name, ers_users.user_last_name,\
                reimb_status, \
                reimb_type \
                FROM ers_reimbursement \
                LEFT JOIN ers_users ON ers_reimbursement.reimb_resolver_id = ers_users.user_id \
                LEFT JOIN ers_reimbursement_status ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.status_id \
                LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id \
	            WHERE ers_reimbursement.reimb_status_id = 1 OR ers_reimbursement.reimb_status_id = 2';

    const result = await dbConnection.query<DashboardRow>(sql, []);
    return result.rows.map(Dashboard.from);
};

/**Pending: Read All */
export async function getAllPendings(): Promise<Pending[]> {
    const sql = 'SELECT  \
                ers_reimbursement.reimb_id, \
                ers_reimbursement.reimb_sumit_date, \
                \
                reimb_type \
                FROM ers_reimbursement \
                LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id \
                WHERE ers_reimbursement.reimb_status_id = 3';

    const result = await dbConnection.query<PendingRow>(sql, []);
    return result.rows.map(Pending.from);
};

/**Add Reimbursemnet: Create */
export async function saveReimbursement(reimburse: Reimburse): Promise<Reimburse> {
    const sql = `INSERT INTO ers_reimbursement ( \
                reimb_amount, \
                reimb_sumit_date, \
                reimb_resolved_date, \
                reimb_description, \
                reimb_reciept, \
                reimb_author_id, \
                reimb_resolver_id, \
                reimb_status_id, \
                reimb_type_id) \
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;

    const result = await dbConnection.query<ReimburseRow>(sql, [
        reimburse.amount,
        reimburse.sumitDate.toISOString(),
        reimburse.resolvedDate.toISOString(),
        reimburse.description,
        reimburse.reciept,
        reimburse.authorId,
        reimburse.resolverId,
        reimburse.statusId,
        reimburse.type
    ]);
    return result.rows.map(Reimburse.from)[0];
};









// /**Retrieve by id */
// export async function getEmployeeById(id: number): Promise<Employee> {
//     const sql = 'SELECT * FROM ers_users WHERE id = $1';
    
//     const result = await dbConnection.query<EmployeeRow>(sql, [id]);
//     return result.rows.map(Employee.from)[0];
// };

// /**Create */
// export async function saveEmployee(user: Employee): Promise<Employee> {
//     const sql = `INSERT INTO ers_users ( \
//                 ers_username, \
//                 ers_password, \
//                 user_first_name, \
//                 user_last_name, \
//                 user_email) \
//                 VALUES ($1, $2, $3, $4, $5) RETURNING *`;

//     const result = await dbConnection.query<UserRow>(sql, [
//         user.userName,
//         user.password,
//         user.firstName,
//         user.lastName,
//         user.email
//     ]);
//     console.log('Doa created');
//     return result.rows.map(User.from)[0];
// };

// /**Update */
// export async function patchUser(user: User): Promise<User> {
//     const sql = `UPDATE ers_users SET \
//                 ers_username = COALESCE($2, ers_username), \
//                 ers_password = COALESCE($3, ers_password), \
//                 user_first_name = COALESCE($4, user_first_name), \
//                 user_last_name = COALESCE($5, user_last_name), \
//                 user_email = COALESCE($6, user_email), \
//                 user_role_id = COALESCE($7, user_role_id) \
//                 WHERE id = $1 RETURNING *`;

//     const result = await dbConnection.query<UserRow>(sql, [
//         user.id,
//         user.userName,
//         user.password,
//         user.firstName,
//         user.lastName,
//         user.email,
//         user.roleId
//     ]);

//     return result.rows.map(User.from)[0];
// };

// /**Delete */
// export async function deleteUserById(id: number): Promise<User> {
//     const sql = `DELETE FROM ers_users WHERE id = $1 RETURNING *`;

//     const result = await dbConnection.query<UserRow>(sql, [id]);
//     return result.rows.map(User.from)[0];
// };