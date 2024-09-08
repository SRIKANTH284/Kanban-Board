import React from 'react';
import Task from './Task';

const Column = ({ status, tasks, onEdit, onDelete, headerColor }) => {
  return (
    <div style={styles.column}>
      <div style={{ ...styles.header, backgroundColor: headerColor }}>
        <h2>{status}</h2>
      </div>
      <div style={styles.tasks}>
        {tasks.map(task => (
          <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  column: {
    width: '30%',
    padding: '10px',
  },
  header: {
    textAlign: 'center',
    padding: '10px 0',
    color: 'white',
    borderRadius: '8px',
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  tasks: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
};

export default Column;
