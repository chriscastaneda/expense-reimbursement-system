/**Convert Postres Schema into Javascript Object */
export class Status {
    id: number;
    reimburseStatus: string;

    /**Create new JS instance object from database schema */
    static from(object: StatusRow): Status {
        const status = new Status(
            object.id, 
            object.reimb_status
        );
        return status;
    };
    
    /**Status constructor */
    constructor(id:number, reimburseStatus: string){
        this.id = id;
        this.reimburseStatus = reimburseStatus;
    }
}

/**Template object of Database Table */
export interface StatusRow {
    id: number;
    reimb_status: string;
};