import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const Task = ({ task, onEdit, onDelete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      ref={drag}
      style={{
        ...styles.task,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <div style={styles.priority}>
        <span style={{ backgroundColor: task.priority === 'High' ? '#FF0000' : task.priority === 'Medium' ? '#F7DC6F' : '#58D68D', ...styles.priorityTag }}>
          {task.priority || 'Medium'}
        </span>
      </div>
      <div style={styles.titleWrapper}>
        <h3 style={styles.title}>{task.title}</h3>
        <div style={styles.dropdownWrapper}>
          <button onClick={toggleDropdown} style={styles.dropdownButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={styles.dropdownIcon}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div style={styles.dropdownContent}>
              <span style={styles.dropdownHeader}>Change Status</span>
              <hr style={styles.divider} />
              <button onClick={() => onEdit({ ...task, status: 'To Do' })} style={styles.dropdownItem}>To Do</button>
              <hr style={styles.divider} />
              <button onClick={() => onEdit({ ...task, status: 'In Progress' })} style={styles.dropdownItem}>In Progress</button>
              <hr style={styles.divider} />
              <button onClick={() => onEdit({ ...task, status: 'Completed' })} style={styles.dropdownItem}>Completed</button>
            </div>
          )}
        </div>
      </div>
      <p>{task.description}</p>
      <p style={styles.date}>{task.date || 'No Date'}</p>

      <div style={styles.actions}>
        <button onClick={() => onEdit(task)} style={styles.actionButton}>Edit</button>
        <button onClick={() => onDelete(task.id)} style={styles.actionButton}>Delete</button>
      </div>
    </div>
  );
};

const styles = {
  task: {
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  priority: {
    marginBottom: '10px',
  },
  priorityTag: {
    padding: '5px 10px',
    borderRadius: '15px',
    color: 'white',
    fontWeight: 'bold',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  dropdownWrapper: {
    position: 'relative',
  },
  dropdownButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  dropdownIcon: {
    width: '16px',
    height: '16px',
    stroke: '#6C4DBE', // Purple color for the icon
  },
  dropdownContent: {
    position: 'absolute',
    top: '20px',
    right: '0px',
    backgroundColor: '#fff',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    borderRadius: '8px',
    padding: '10px',
  },
  dropdownHeader: {
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'block',
    color: '#5E6C84',
    fontSize: '14px',
  },
  dropdownItem: {
    backgroundColor: 'transparent',
    border: 'none',
    textAlign: 'left',
    padding: '8px 0',
    width: '100%',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#333',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #ddd',
    margin: '8px 0',
  },
  date: {
    fontSize: '12px',
    color: '#a0a0a0',
  },
  actions: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  actionButton: {
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: '#6C4DBE',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Task;
