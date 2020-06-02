/**Convert Postres Schema into Javascript Object */
export class Reimburse {
    id: number;
    amount: number;
    sumitted: Date;
    resolved: Date;
    description: string;
    reciept: string;
    authorId: number;
    resolverId: number;
    statusId: number;
    typeId: number;

    /**Create new JS instance object from database schema */
    static from(object: ReimburseRow): Reimburse {
        const user = new Reimburse(
            object.id, 
            object.reimb_amount, 
            object.reimb_sumitted, 
            object.reimb_resolved, 
            object.reimb_description, 
            object.reimb_reciept, 
            object.reimb_author,
            object.reimb_resolver,
            object.reimb_status_id,
            object.reimb_type_id
        );
        return user;
    };
    
    /**User constructor */
    constructor(id:number, amount: number, sumitted: Date, resolved: Date, description: string, reciept: string, authorId: number, resolverId: number, statusId: number, typeId: number){
        this.id = id;
        this.amount = amount;
        this.sumitted = sumitted;
        this.resolved = resolved;
        this.description = description;
        this.reciept = reciept;
        this.authorId = authorId;
        this.resolverId = resolverId;
        this.statusId = statusId;
        this.typeId = typeId;
    }
}

/**Template object of Database Table */
export interface ReimburseRow {
    id: number;
    reimb_amount: number;
    reimb_sumitted: Date;
    reimb_resolved: Date;
    reimb_description: string;
    reimb_reciept: string;
    reimb_author: number;
    reimb_resolver: number;
    reimb_status_id: number;
    reimb_type_id: number;
};