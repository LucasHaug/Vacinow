import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.vacinow.tk'
})

export default api;
