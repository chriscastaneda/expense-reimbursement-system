/* istanbul ignore file */
/**Convert Postres Schema into Javascript Object */
export class Pending {
    reimbId: number;
    sumitDate: Date;
    type: string;

    /**Create new JS instance object from database schema */
    static from(object: PendingRow): Pending {
        const pending = new Pending(
            object.reimb_id,
            new Date(object.reimb_sumit_date),
            object.reimb_type
        );
        return pending;
    };
    
    /**Pending constructor */
    constructor(reimbId: number, sumitDate: Date, type: string){
        this.reimbId = reimbId;
        this.sumitDate = sumitDate;
        this.type = type;
    }
}

/**Template object of Database Table */
export interface PendingRow {
    reimb_id: number;
    reimb_sumit_date: Date;
    reimb_type: string;
};