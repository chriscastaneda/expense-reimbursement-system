/**Convert Postres Schema into Javascript Object */
export interface ApprovalRead {
    reimbId: number;
    amount: number;
    sumitDate: Date | string;
    resolvedDate: Date | string;    
    description: string;
    reciept: string;
    firstName: string;
    lastName: string;
    reimbStatus: string;
    reimbType: string;
};