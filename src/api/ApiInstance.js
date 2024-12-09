import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    }
})

export default axiosInstance;