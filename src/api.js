const BASE_URL = 'https://task-manager-api-mptxwjh6.onrender.com';
const api = {
  register: async (username, email, password) => {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
    return response.json();
  },
  login: async (email, password) => {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },
  getMe: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/auth/me`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },
  createTask: async (title, description) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ title, description })
    });
    return response.json();
  },
  getTasks: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/tasks`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },
  getCompletedTasks: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/tasks?status=completed`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },
  getIncompleteTasks: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/tasks?status=incomplete`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },
  updateTask: async (id, title, description) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ title, description })
    });
    return response.json();
  },
  deleteTask: async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/tasks/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  }
};
export default api;