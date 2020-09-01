/* istanbul ignore file */
/**Convert Postres Schema into Javascript Object */
export class Dashboard {
    reimbId: number;
    amount: number;
    sumitDate: Date;
    resolvedDate: Date;
    description: string;
    firstName: string;
    lastName: string;
    status: string;
    type: string;

    /**Create new JS instance object from database schema */
    static from(object: DashboardRow): Dashboard {
        const dashboard = new Dashboard(
            object.reimb_id,
            object.reimb_amount,
            new Date(object.reimb_sumit_date), 
            new Date(object.reimb_resolved_date),
            object.reimb_description,
            object.user_first_name,
            object.user_last_name,
            object.reimb_status,
            object.reimb_type,
        );
        return dashboard;
    };
    
    /**Dashboard constructor */
    constructor(reimbId:number, amount: number, sumitDate: Date, resolvedDate: Date, description: string, firstName: string, lastName: string, status: string, type: string){
        this.reimbId = reimbId;
        this.amount = amount;
        this.sumitDate = sumitDate;
        this.resolvedDate = resolvedDate;
        this.description = description;
        this.firstName = firstName;
        this.lastName = lastName;
        this.status = status;
        this.type = type;
    }
}

/**Template object of Database Table */
export interface DashboardRow {
    reimb_id: number;
    reimb_amount: number;
    reimb_sumit_date: Date;
    reimb_resolved_date: Date;
    reimb_description: string;
    user_first_name: string;
    user_last_name: string;
    reimb_status: string;
    reimb_type: string;
};