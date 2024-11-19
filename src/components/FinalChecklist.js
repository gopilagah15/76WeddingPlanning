import React from 'react';

const FinalChecklist = ({ tasks }) => {
    const completedTasks = tasks.filter((task) => task.completed);
    const pendingTasks = tasks.filter((task) => !task.completed);

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Final Checklist</h2>
            <h3>Completed Tasks</h3>
            {completedTasks.length === 0 && <p>No tasks completed yet.</p>}
            <ul>
                {completedTasks.map((task, index) => (
                    <li key={index}>{task.taskName} (Deadline: {task.deadline})</li>
                ))}
            </ul>

            <h3>Pending Tasks</h3>
            {pendingTasks.length === 0 && <p>All tasks completed!</p>}
            <ul>
                {pendingTasks.map((task, index) => (
                    <li key={index}>{task.taskName} (Deadline: {task.deadline})</li>
                ))}
            </ul>
        </div>
    );
};

export default FinalChecklist;
