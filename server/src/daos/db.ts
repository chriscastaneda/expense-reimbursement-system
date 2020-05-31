import { Pool } from 'pg';

export const dbConnection = new Pool({
    database: 'reimbursement',
    host: process.env.REIMBURSE_APP_URL,
    port: 5432,
    user: process.env.REIMBURSE_APP_ROLE,
    password: process.env.REIMBURSE_APP_PASSWORD
});