/**Convert Postres Schema into Javascript Object */
export interface ApprovalRead {
    reimbId: number;
    amount: number;
    sumitDate: Date;
    resolvedDate: Date;    
    description: string;
    reciept: string;
    firstName: string;
    lastName: string;
    statusId: number;
    type: number;
};