import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5023/Api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;