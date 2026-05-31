import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList.jsx';
import TaskForm from '../components/TaskForm.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import api from '../api.js';
const DashboardPage = ({ primaryColor }) => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleCreateTask = async () => {
    try {
      setLoading(true);
      const newTask = await api.createTask(title, description);
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const tasks = await api.getTasks();
        setTasks(tasks);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);
  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <TaskForm
        title={title}
        description={description}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeDescription={(e) => setDescription(e.target.value)}
        onCreateTask={handleCreateTask}
        loading={loading}
        error={error}
      />
      <TaskList tasks={tasks} />
    </div>
  );
};
export default DashboardPage;