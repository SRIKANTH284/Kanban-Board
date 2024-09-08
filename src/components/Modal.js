import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onSubmit, task }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('To Do');
  const [priority, setPriority] = useState('Medium'); // Set default priority to "Medium"

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDate(task.date);
      setStatus(task.status);
      setPriority(task.priority); // Ensure priority is set when editing the task
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, date, status, priority });
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>{task ? 'Edit Task' : 'Create New Task'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title *
            <input 
              type="text" 
              placeholder="Select here" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
              style={styles.input}
            />
          </label>
          <label>
            Description
            <textarea 
              placeholder="Add here" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
              style={styles.textarea}
            />
          </label>
          <label>
            Select Date *
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
              style={styles.input}
            />
          </label>
          <label>
            Status
            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)} 
              style={styles.select}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
          <label>
            Priority
            <select 
              value={priority} 
              onChange={(e) => setPriority(e.target.value)}  // Update priority based on selection
              style={styles.select}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
          <div style={styles.buttons}>
            <button type="button" onClick={onClose} style={styles.cancelButton}>Cancel</button>
            <button type="submit" style={styles.createButton}>{task ? 'Update' : 'Create'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    width: '500px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  select: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  createButton: {
    padding: '10px 20px',
    backgroundColor: '#6C4DBE',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Modal;
