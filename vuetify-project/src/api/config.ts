import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const token = localStorage.getItem('token');

if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
export async function login(Email: string, password: string) {
    try {
        const res = await api.post('/login', { email: Email, password: password });
        return res.data.access_token
    }
    catch (err) {
        console.log(err);
    }
}