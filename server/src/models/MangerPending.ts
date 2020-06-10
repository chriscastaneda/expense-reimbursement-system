/**Convert Postres Schema into Javascript Object */
export class Pending {
    sumitDate: Date;
    type: string;
    firstName: string;
    lastName: string;

    /**Create new JS instance object from database schema */
    static from(object: PendingRow): Pending {
        const pending = new Pending(
            new Date(object.reimb_sumit_date),
            object.reimb_type,
            object.user_first_name,
            object.user_last_name
        );
        return pending;
    };
    
    /**Pending constructor */
    constructor(sumitDate: Date, type: string, firstName: string, lastName: string){
        this.sumitDate = sumitDate;
        this.type = type;
    }
}

/**Template object of Database Table */
export interface PendingRow {
    reimb_sumit_date: Date;
    reimb_type: string;
    user_first_name: string;
    user_last_name: string;
};