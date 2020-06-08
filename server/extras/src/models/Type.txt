/**Convert Postres Schema into Javascript Object */
export class Type {
    id: number;
    reimburseType: string;

    /**Create new JS instance object from database schema */
    static from(object: TypeRow): Type {
        const type = new Type(
            object.id, 
            object.reimb_type
        );
        return type;
    };
    
    /**Type constructor */
    constructor(id:number, reimburseType: string){
        this.id = id;
        this.reimburseType = reimburseType;
    }
}

/**Template object of Database Table */
export interface TypeRow {
    id: number;
    reimb_type: string;
};