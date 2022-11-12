import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    'Content-Type': 'application/json',
    'access-control-allow-origin': "http://localhost:3000"
  }
});

export default api;