import React from 'react';

const TaskList = ({ tasks, toggleTaskCompletion }) => {
    return (
        <div>
            <h2>Task List</h2>
            {tasks.length === 0 && <p>No tasks added yet.</p>}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <strong>Task:</strong> {task.taskName} <br />
                        <strong>Deadline:</strong> {task.deadline} <br />
                        <strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'} <br />
                        <button onClick={() => toggleTaskCompletion(index)}>
                            {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
