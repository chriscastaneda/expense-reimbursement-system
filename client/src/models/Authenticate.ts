/**Convert Postres Schema into Javascript Object */
export interface Authenticate {
    userName: string;
    userPassword: string;
    userID?: number;
    roleID?: number;
};