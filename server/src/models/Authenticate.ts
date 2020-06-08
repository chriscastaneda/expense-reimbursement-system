/**Convert Postres Schema into Javascript Object */
export class Authenticate {
    username: string;
    userPassword: string;
    userRole: string;

    /**Create new JS instance object from database schema */
    static from(obj: AuthenticateRow): Authenticate {
        const authenticate = new Authenticate(
            obj.ers_username,
            obj.ers_password,
            obj.user_roles_id
        );
        return authenticate;
    }
    /**Type constructor */
    constructor( username: string, userPassword: string, userRole: string) {
        this.username = username;
        this.userPassword = userPassword;
        this.userRole = userRole;
    }
}

/**Template object of Database Table */
export interface AuthenticateRow {
    ers_username: string;
    ers_password: string;
    user_roles_id: string;
}