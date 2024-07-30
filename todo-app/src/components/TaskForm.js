import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskForm = ({ addTask, updateTask, currentTask }) => {
  const [task, setTask] = useState({ title: '', description: '', timestamp: new Date() });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    } else {
      setTask({ title: '', description: '', timestamp: new Date() });
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleDateChange = (date) => {
    setTask((prevTask) => ({ ...prevTask, timestamp: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      updateTask(task);
    } else {
      addTask(task);
    }
    setTask({ title: '', description: '', timestamp: new Date() });
  };

  return (
    <div className="task-form-container">
      <h2>{currentTask ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
          required
        />
        <DatePicker
          selected={task.timestamp}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="Pp"
        />
        <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
