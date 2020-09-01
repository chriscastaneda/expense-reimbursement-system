/* istanbul ignore file */
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
    reimbStatus: string;
    reimbType: string;

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
            object.reimb_status,
            object.reimb_type
        );
        return approvalRead;
    };
    
    /**Approval constructor */
    constructor(reimbId: number, amount: number, sumitDate: Date, resolvedDate: Date, description: string, 
        reciept: string, firstName: string, lastName: string, reimbStatus: string, reimbType: string){

        this.reimbId = reimbId;
        this.amount = amount;
        this.sumitDate = sumitDate;
        this.resolvedDate = resolvedDate;
        this.description = description;
        this.reciept = reciept;
        this.firstName = firstName;
        this.lastName = lastName;
        this.reimbStatus = reimbStatus;
        this.reimbType = reimbType;
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
    reimb_status: string;
    reimb_type: string;
};