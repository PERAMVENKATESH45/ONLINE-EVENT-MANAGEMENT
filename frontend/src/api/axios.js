import axios from 'axios';

const API = axios.create({
  baseURL: 'https://online-event-management.onrender.com', // 🔁 Change to production URL when deploying
  withCredentials: false, // Enable only if you use cookies (optional)
});

// ✅ Request Interceptor — Attaches JWT token automatically
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ❗ OPTIONAL: Response Interceptor for auto-logout on token expiry
// Uncomment below if you want auto-handling of 401 errors
/*
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login'; // Or use `navigate('/login')` in a hook
    }

    return Promise.reject(error);
  }
);
*/

export default API;
