import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import TaskContainer from './components/TaskTypes/TaskContainer';
import './App.css';
import { useState } from 'react';
function App() {

  //task array
  const [task, setTask] = useState([])

  return (
    <div className="App">
      <AddTaskForm setTask={setTask} />
      <TaskContainer task={task} setTask={setTask} />
    </div>
  );
}

export default App;
