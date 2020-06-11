/**Convert Postres Schema into Javascript Object */
export interface ApprovalPatch {
    reimbId: number;
    amount: number;
    sumitDate: Date;
    resolvedDate: Date;
    description: string;
    reciept: string;
    authorId: number;
    resolverId:number;
    statusId: number;
    type: number;
};