import Axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const internalAxios = Axios.create({
    baseURL: baseUrl
});

// Authenication: send token
export const authAxios = Axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
});