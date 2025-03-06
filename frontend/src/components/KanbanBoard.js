// src/components/KanbanBoard.js
import React from 'react';
import '../styles/KanbanBoard.scss'; // Create this file for board styles

const KanbanBoard = ({ tasks }) => {
  const columns = ['To Do', 'In Progress', 'On Hold', 'Completed'];

  const renderTasks = (status) => {
    return tasks
      .filter(task => task.status === status)
      .map((task, index) => (
        <div key={index} className="task">
          <h4>{task.title}</h4>
          <p className="small"><strong>Assignee:</strong> {task.assignee}</p>
          <p className="small"><strong>Due:</strong> {task.dueDate}</p>
          <p className="small"><strong>Priority:</strong> {task.priority}</p>
          <p>{task.description}</p>
        </div>
      ));
  };

  return (
    <section className="kanban-board">
      <h2>Task Board</h2>
      <div className="board">
        {columns.map((status) => (
          <div key={status} className="column">
            <h3>{status}</h3>
            <div className="taskList">
              {renderTasks(status)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KanbanBoard;
