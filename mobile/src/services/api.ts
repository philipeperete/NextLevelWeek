import axios from 'axios';
import { API_HOST } from '../utils/config';

const api = axios.create({ 
    baseURL: `${API_HOST}`
});

export default api;