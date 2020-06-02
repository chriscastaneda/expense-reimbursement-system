/**Convert Postres Schema into Javascript Object */
export class Role {
    id: number;
    userRole: string;

    /**Create new JS instance object from database schema */
    static from(object: RoleRow): Role {
        const role = new Role(
            object.id, 
            object.user_role
        );
        return role;
    };
    
    /**Role constructor */
    constructor(id:number, userRole: string){
        this.id = id;
        this.userRole = userRole;
    }
}

/**Template object of Database Table */
export interface RoleRow {
    id: number;
    user_role: string;
};