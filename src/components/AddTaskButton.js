import React, { useState, useEffect } from 'react';
import Modal from './Modal';  // Modal component

const AddTaskButton = ({ onTaskSubmit, editingTask }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (editingTask) {
      setModalOpen(true);  // Open the modal if a task is being edited
    }
  }, [editingTask]);

  const handleTaskSubmit = (task) => {
    onTaskSubmit(task);  // Call the function passed from App.js
    toggleModal();  // Close the modal after submission
  };

  return (
    <div>
      <button style={styles.button} onClick={toggleModal}>Create Task</button>
      <Modal 
        isOpen={isModalOpen} 
        onClose={toggleModal} 
        onSubmit={handleTaskSubmit} 
        task={editingTask} 
      />
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: '#6C4DBE',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AddTaskButton;
