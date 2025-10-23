import axios from 'axios';
import type { AxiosInstance } from 'axios';


const instance: AxiosInstance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    headers: {
        "Content-Type": "application/json"
    }
});

export default instance;