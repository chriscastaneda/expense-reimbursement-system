/**Convert Postres Schema into Javascript Object */
export class Authenticate {
    userName: string;
    userPassword: string;
    userID: number;
    roleID: number;


    /**Create new JS instance object from database schema */
    static from(object: AuthenticateRow): Authenticate {
        const authenticate = new Authenticate(
            object.ers_username,
            object.ers_password,
            object.user_id,
            object.user_role_id            
        );
        return authenticate;
    }
    /**Type constructor */
    constructor( userName: string, userPassword: string, userID: number, roleID: number) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.userID = userID;
        this.roleID = roleID;
    }
}

/**Template object of Database Table */
export interface AuthenticateRow {
    ers_username: string;
    ers_password: string;
    user_id: number;
    user_role_id: number;
}