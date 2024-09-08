import React from 'react';
import Column from './Column';

const Board = ({ tasks, onEdit, onDelete }) => {
  return (
    <div style={styles.board}>
      <Column status="To Do" tasks={tasks.filter(task => task.status === 'To Do')} onEdit={onEdit} onDelete={onDelete} headerColor="#6C4DBE" />
      <Column status="In Progress" tasks={tasks.filter(task => task.status === 'In Progress')} onEdit={onEdit} onDelete={onDelete} headerColor="#F5A623" />
      <Column status="Completed" tasks={tasks.filter(task => task.status === 'Completed')} onEdit={onEdit} onDelete={onDelete} headerColor="#7ED321" />
    </div>
  );
};

const styles = {
  board: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '#f7f8fa',
    minHeight: '100vh',
  },
};

export default Board;
