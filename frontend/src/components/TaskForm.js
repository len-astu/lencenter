// src/components/TaskForm.js
import React, { useState } from 'react';
import '../styles/TaskForm.scss'; // Create this file for TaskForm-specific styles

const TaskForm = ({ onCreateTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    assignee: '',
    dueDate: '',
    priority: '',
    status: 'To Do'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask(task);
    setTask({
      title: '',
      description: '',
      assignee: '',
      dueDate: '',
      priority: '',
      status: 'To Do'
    });
  };

  return (
    <section className="task-form">
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Task Title" value={task.title} onChange={handleChange} required />
        <select id="assignee" value={task.assignee} onChange={handleChange} required>
          <option value="" disabled>Select Assignee</option>
          <option value="CEO">CEO</option>
          <option value="Co-founder">Co-founder</option>
          <option value="Manager">Manager</option>
        </select>
        <textarea id="description" placeholder="Task Description" rows="3" value={task.description} onChange={handleChange}></textarea>
        <input type="date" id="dueDate" value={task.dueDate} onChange={handleChange} required />
        <select id="priority" value={task.priority} onChange={handleChange} required>
          <option value="" disabled>Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select id="status" value={task.status} onChange={handleChange} required>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="On Hold">On Hold</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Create Task</button>
      </form>
    </section>
  );
};

export default TaskForm;
