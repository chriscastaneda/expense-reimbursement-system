/**Convert Postres Schema into Javascript Object */
export interface Dashboard {
    reimbId: number;
    amount: number;
    sumitDate: Date | string;
    resolvedDate: Date | string;
    description: string;
    firstName: string;
    lastName: string;
    status: string;
    type: string;
};