/**Convert Postres Schema into Javascript Object */
export class Approval {
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

    /**Create new JS instance object from database schema */
    static from(object: ApprovalRow): Approval {
        const approval = new Approval(
            object.reimb_id,
            object.reimb_amount, 
            new Date(object.reimb_sumit_date),
            new Date(object.reimb_resolved_date),
            object.reimb_description, 
            object.reimb_reciept,
            object.reimb_author_id,
            object.reimb_resolver_id,
            object.reimb_status_id,
            object.reimb_type_id
        );
        return approval;
    };
    
    /**Approval constructor */
    constructor(reimbId: number, amount: number, sumitDate: Date, resolvedDate: Date, description: string, 
        reciept: string, authorId: number, resolverId:number, statusId: number, type: number){

        this.reimbId = reimbId;
        this.amount = amount;
        this.sumitDate = sumitDate;
        this.resolvedDate = resolvedDate;
        this.description = description;
        this.reciept = reciept;
        this.authorId = authorId;
        this.resolverId = resolverId;
        this.statusId = statusId;
        this.type = type;
    }
}

/**Template object of Database Table */
export interface ApprovalRow {
    reimb_id: number;
    reimb_amount: number;
    reimb_sumit_date: Date;
    reimb_resolved_date: Date;
    reimb_description: string;
    reimb_reciept: string;
    reimb_author_id: number;
    reimb_resolver_id:number;
    reimb_status_id: number;
    reimb_type_id: number;
};