/**Convert Postres Schema into Javascript Object */
export interface ApprovalPatch {
    reimbId?: number;
    amount?: number;
    sumitDate?: Date | string;
    resolvedDate?: Date | string;
    description?: string;
    reciept?: string;
    authorId?: number;
    resolverId?:number;
    statusId?: number;
    type?: number;
};