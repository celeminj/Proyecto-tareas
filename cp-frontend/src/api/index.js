import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:8000/api"; // Replace with your API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token){
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Los try catch se manejan en el componente, no aquí, para que el componente pueda reaccionar a los errores (mostrar mensajes, etc.)
export const registerUser = async (userData) => {
        const response = await api.post('/register', userData);
        return response.data;
};

export const loginUser = async (credentials) => {
        const response = await api.post('/login', credentials);
        return response.data;
};