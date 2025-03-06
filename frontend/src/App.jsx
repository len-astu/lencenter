// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import KanbanBoard from './components/KanbanBoard';
import LoginModal from './components/LoginModal';
import './styles/main.scss'; // Global styles

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleCreateTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const handleTraditionalLogin = (email, password) => {
    // Replace with real API call
    if (email && password) {
      alert('Traditional login successful!');
      setIsAuthenticated(true);
      setIsModalOpen(false);
    } else {
      alert('Please enter valid credentials.');
    }
  };

  const handleSocialLogin = (provider) => {
    // Replace with real OAuth integration
    alert(`Social login with ${provider} successful!`);
    setIsAuthenticated(true);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header 
        onNavClick={(page) => alert(`Navigating to ${page}`)}
        onLoginClick={() => setIsModalOpen(true)}
        isAuthenticated={isAuthenticated}
      />
      <div className="container">
        <TaskForm onCreateTask={handleCreateTask} />
        <KanbanBoard tasks={tasks} />
      </div>
      <LoginModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onTraditionalLogin={handleTraditionalLogin}
        onSocialLogin={handleSocialLogin}
      />
    </div>
  );
};

export default App;
