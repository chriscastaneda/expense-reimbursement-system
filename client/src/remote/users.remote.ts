import { internalAxios } from './internal-axios';
import { Authenticate } from '../models/Authenticate';


export const getAllUsers = async ()=> {
    const respone = await internalAxios.get('/users');
    console.log(respone);
};

export const createToken = async (login: Authenticate) => {
    const response = await internalAxios.post('/authentication/login', login);
    return response; //console.log(response);
}