/**Convert Postres Schema into Javascript Object */
export interface Authenticate {
    username: string;
    userPassword: string;
    userRole?: string;
};