/**Convert Postres Schema into Javascript Object */
export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    roleId: number;

    /**Create new JS instance object from database schema */
    static from(object: UserRow): User {
        const user = new User(
            object.id, 
            object.ers_username, 
            object.ers_password, 
            object.user_first_name, 
            object.user_last_name, 
            object.user_email, 
            object.user_role_id
        );
        return user;
    };
    
    /**User constructor */
    constructor(id:number, userName: string, password: string, firstName: string, lastName: string, email: string, roleId: number){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roleId = roleId;
    }
}

/**Template object of Database Table */
export interface UserRow {
    id: number;
    ers_username: string;
    ers_password: string;
    user_first_name: string;
    user_last_name: string;
    user_email: string;
    user_role_id: number;
};