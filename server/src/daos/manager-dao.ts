import { dbConnection } from './db';
import { Dashboard, DashboardRow } from '../models/Dashboard';
import { Pending, PendingRow } from '../models/MangerPending';
import { ApprovalPatch, ApprovalPatchRow } from '../models/ApprovalPatch';
import { ApprovalRead, ApprovalReadRow } from '../models/ApprovalRead';
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
                LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id';

    const result = await dbConnection.query<DashboardRow>(sql, []);
    return result.rows.map(Dashboard.from);
};

/**Dashboard: Retrieve by id */
export async function getStatusById(id: number): Promise<Dashboard> {
    const sql = `SELECT \
                ers_reimbursement.reimb_id, \
                ers_reimbursement.reimb_amount, \
                ers_reimbursement.reimb_sumit_date, \
                ers_reimbursement.reimb_resolved_date, \
                ers_reimbursement.reimb_description, \
                \
                ers_users.user_first_name, ers_users.user_last_name, \
                 \
                reimb_status, \
                \
                reimb_type \
                 \
                FROM ers_reimbursement \
                LEFT JOIN ers_users ON ers_reimbursement.reimb_author_id = ers_users.user_id \
                LEFT JOIN ers_reimbursement_status ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.status_id \
                LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id \
                \
                WHERE ers_reimbursement_status.status_id = $1`;  
    
                // ORDER BY id

    const result = await dbConnection.query<DashboardRow>(sql, [id]);
    return result.rows.map(Dashboard.from)[0];
};

/**Pending: Read All */
export async function getAllPendings(): Promise<Pending[]> {
    const sql = `SELECT  \
                ers_reimbursement.reimb_id, \
                ers_reimbursement.reimb_sumit_date, \
                \
                ers_users.user_first_name, ers_users.user_last_name, \
                \
                reimb_type \
                FROM ers_reimbursement \
                LEFT JOIN ers_users ON ers_reimbursement.reimb_author_id = ers_users.user_id \
                LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id \
                WHERE ers_reimbursement.reimb_status_id = 3`;

    const result = await dbConnection.query<PendingRow>(sql, []);
    return result.rows.map(Pending.from);
};

/**Approve Reimbursemnet: Update */
export async function patchApproval(approval: ApprovalPatch): Promise<ApprovalPatch> {
        const sql = `UPDATE ers_reimbursement SET \
                    reimb_amount = COALESCE($2, reimb_amount), \
                    reimb_sumit_date = COALESCE($3, reimb_sumit_date), \
                    reimb_resolved_date = COALESCE($4, reimb_resolved_date), \
                    reimb_description = COALESCE($5, reimb_description), \
                    reimb_reciept = COALESCE($6, reimb_reciept), \
                    reimb_author_id = COALESCE($7, reimb_author_id), \
                    reimb_resolver_id = COALESCE($8, reimb_resolver_id), \
                    reimb_status_id = COALESCE($9, reimb_status_id), \
                    reimb_type_id = COALESCE($10, reimb_author_id) \
                    WHERE reimb_id = $1 RETURNING *`;
    
        const result = await dbConnection.query<ApprovalPatchRow>(sql, [
            approval.reimbId,
            approval.amount,
            approval.sumitDate,
            approval.resolvedDate,
            approval.description,
            approval.reciept,
            approval.authorId,
            approval.resolverId,
            approval.statusId,
            approval.type
        ]);
    
        return result.rows.map(ApprovalPatch.from)[0];
};



/**Approve Reimbursemnet: Retrieve All Updated */
export async function getApprovalById(): Promise<ApprovalRead[]> {
    const sql = `SELECT  \
                ers_reimbursement.reimb_id, \
                ers_reimbursement.reimb_amount, \
                ers_reimbursement.reimb_sumit_date, \
                ers_reimbursement.reimb_resolved_date, \
                ers_reimbursement.reimb_description, \
                ers_reimbursement.reimb_reciept, \
                \
                ers_users.user_first_name, ers_users.user_last_name, \
                \
                reimb_status, \
                reimb_type \
                FROM ers_reimbursement \
                LEFT JOIN ers_users ON ers_reimbursement.reimb_author_id = ers_users.user_id \
                LEFT JOIN ers_reimbursement_status ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.status_id \
                LEFT JOIN ers_reimbursement_type ON ers_reimbursement.reimb_type_id = ers_reimbursement_type.type_id \
                WHERE ers_reimbursement.reimb_status_id = 3 ORDER BY ers_reimbursement.reimb_sumit_date`;

    const result = await dbConnection.query<ApprovalReadRow>(sql, []);
    return result.rows.map(ApprovalRead.from);
};








// /**Retrieve by id */
// export async function getEmployeeById(id: number): Promise<Employee> {
//     const sql = 'SELECT * FROM ers_approvals WHERE id = $1';
    
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