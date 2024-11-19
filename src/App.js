import React, { useState } from 'react'; 
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ProgressTracker from './components/ProgressTracker';
import FinalChecklist from './components/FinalChecklist';

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Add a new task
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    // Toggle task completion
    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Wedding Planning Checklist</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
            <ProgressTracker tasks={tasks} />
            <FinalChecklist tasks={tasks} />
        </div>
    );
};

export default App;
