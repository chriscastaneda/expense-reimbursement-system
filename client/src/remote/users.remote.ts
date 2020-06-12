import Axios from 'axios';
import { internalAxios, authAxios } from './internal-axios';
import { Authenticate } from '../models/Authenticate';
import { Dashboard } from '../models/Dashboard';
import { Reimburse } from '../models/Reimburse';
import { EmployeePending } from '../models/EmployeePending';
import { ManagerPending } from '../models/MangerPending';
import { ApprovalPatch } from '../models/ApprovalPatch';
import { ApprovalRead } from '../models/ApprovalRead';
import { User } from '../models/User';


// Employee: Dashboard
export const getAllEmployeeDashboard = async () => {
    const response = await internalAxios.get<Dashboard[]>('/employees/dashboard');
    return response.data.map(dashboard => {
        dashboard.sumitDate = new Date(dashboard.sumitDate); // Replace string birthdate with Date object
        dashboard.resolvedDate = new Date(dashboard.resolvedDate);
        return dashboard;
    });
}

// Employee: Pending
export const getAllEmployeePending = async () => {
    const response = await internalAxios.get<EmployeePending[]>('/employees/pending');
    return response.data.map(pending => {
        pending.sumitDate = new Date(pending.sumitDate); // Replace string birthdate with Date object
        return pending;
    });
}

// Employee: Add Reimbursement
export const getAllEmployeeReimburse = async () => {
    const response = await internalAxios.get<Reimburse[]>('/employees/reimburse');
    return response.data.map(reimburse => {
        reimburse.sumitDate = new Date(reimburse.sumitDate); // Replace string birthdate with Date object
        reimburse.resolvedDate = new Date(reimburse.resolvedDate);
        // return reimburse;
        console.log(response);
    });
    
}

// Manager: Dashboard
export const getAllManagerDashboard = async () => {
    const response = await internalAxios.get<Dashboard[]>('/managers/dashboard');
    return response.data.map(dashboard => {
        dashboard.sumitDate = new Date(dashboard.sumitDate); // Replace string birthdate with Date object
        dashboard.resolvedDate = new Date(dashboard.resolvedDate);
        // console.log(dashboard);
        return dashboard;
    });
}

// Manager: Pending
export const getAllManagerPending = async () => {
    const response = await internalAxios.get<ManagerPending[]>('/managers/pending');
    return response.data.map(pending => {
        pending.sumitDate = new Date(pending.sumitDate); // Replace string birthdate with Date object
        console.log(response);
        return pending;
    });
}

// Manager: Approval
export const updateAllManagerRequests = async (approval: ApprovalPatch) => {
    const response = await internalAxios.patch('/managers/approvals', approval);
    // return true;
}

export const getAllManagerRequests = async () => {
    const response = await internalAxios.get<ApprovalRead[]>('/managers/requests');
    return response.data.map(approval => {
        approval.sumitDate = new Date(approval.sumitDate); // Replace string birthdate with Date object
        approval.resolvedDate = new Date(approval.resolvedDate);
        return approval;
    });    
}

/**************************************************************************** */
// Account: Get from reimburse table
export const getAllReimbursements = async () => {
    const response = await internalAxios.get<Reimburse[]>('/employees/dashboard');
    return response.data.map(dashboard => {
        dashboard.sumitDate = new Date(dashboard.sumitDate); // Replace string birthdate with Date object
        dashboard.resolvedDate = new Date(dashboard.resolvedDate);
        return dashboard;
    });
}

// Account: Post to reimbursement table
export const createUser = async (reimburse: Reimburse) => {
    const response = await internalAxios.post('/employees/reimburse', reimburse);
    return true;
}
/**************************************************** */


// Authenication:request token
export const createToken = async (login: Authenticate) => {
    const response = await internalAxios.post('/authentication/login', login);
    return response; //console.log(response);
}


// Authenication: get user data with token
export const getAllUserTable = async () => {
    const response = await authAxios.get<User[]>('/users');
    return response.data.map(user => {
        return user;
    });
}