import React, { useState } from 'react';
import Board from './components/Board';
import AddTaskButton from './components/AddTaskButton';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (newTask) => {
    if (editingTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id ? { ...task, ...newTask } : task
        )
      );
      setEditingTask(null);
    } else {
      const addedTask = { id: Date.now(), ...newTask };
      setTasks((prevTasks) => [...prevTasks, addedTask]);
    }
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header style={styles.header}>
          <h1>Desktop & Mobile Application</h1>
          <AddTaskButton onTaskSubmit={addTask} editingTask={editingTask} />
        </header>
        <Board tasks={tasks} onEdit={setEditingTask} onDelete={deleteTask} />
      </div>
    </DndProvider>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f7f8fa',
  },
};

export default App;
