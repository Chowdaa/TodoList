import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, toggleComplete, deleteTask, editTask, searchTerm }) => {
  const highlightText = (text) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
    );
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : ''}`}
          >
            <h3>{highlightText(task.title)}</h3>
            <p>{highlightText(task.description)}</p>
            <div className="task-actions">
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => editTask(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
