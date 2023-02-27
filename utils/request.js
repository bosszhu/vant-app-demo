import axios from "axios";

const service = axios.create({
    baseURL: '/api/jsis',
    timeout: 60000,
});

service.interceptors.request.use(config => {
    console.log(config);
    {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        config.url = window.global.BAEE_URL + config.url;
    }
    return config;
});
service.interceptors.response.use(
    response => {
        const res = response.data;
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);
export default service