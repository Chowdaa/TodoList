import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><small>Last updated: {new Date(task.timestamp).toLocaleString()}</small></p>
      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>Mark as {task.completed ? 'Incomplete' : 'Complete'}</button>
        <button onClick={() => editTask(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
