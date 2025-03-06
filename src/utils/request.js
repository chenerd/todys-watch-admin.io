import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
})
service.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
})
service.interceptors.response.use(response => {
    const { data } = response;
    if (data.code === 200) {
        return data.data;
    } else {
        return Promise.reject(data.message);
    }
}, error => {
    return Promise.reject(error);
})


export default service;
