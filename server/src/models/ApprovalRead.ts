/**Convert Postres Schema into Javascript Object */
export class ApprovalRead {
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

    /**Create new JS instance object from database schema */
    static from(object: ApprovalReadRow): ApprovalRead {
        const approvalRead = new ApprovalRead(
            object.reimb_id,
            object.reimb_amount, 
            new Date(object.reimb_sumit_date),
            new Date(object.reimb_resolved_date),
            object.reimb_description, 
            object.reimb_reciept,
            object.user_first_name,
            object.user_last_name,
            object.reimb_status_id,
            object.reimb_type_id
        );
        return approvalRead;
    };
    
    /**Approval constructor */
    constructor(reimbId: number, amount: number, sumitDate: Date, resolvedDate: Date, description: string, 
        reciept: string, firstName: string, lastName: string, statusId: number, type: number){

        this.reimbId = reimbId;
        this.amount = amount;
        this.sumitDate = sumitDate;
        this.resolvedDate = resolvedDate;
        this.description = description;
        this.reciept = reciept;
        this.firstName = firstName;
        this.lastName = lastName;
        this.statusId = statusId;
        this.type = type;
    }
}

/**Template object of Database Table */
export interface ApprovalReadRow {
    reimb_id: number;
    reimb_amount: number;
    reimb_sumit_date: Date;
    reimb_resolved_date: Date;
    reimb_description: string;
    reimb_reciept: string;
    user_first_name: string;
    user_last_name: string;
    reimb_status_id: number;
    reimb_type_id: number;
};