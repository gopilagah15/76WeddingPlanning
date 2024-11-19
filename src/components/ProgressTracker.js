import React from 'react';

const ProgressTracker = ({ tasks }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Progress Tracker</h2>
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
            <p>Progress: {progress}%</p>
            <progress value={progress} max="100" style={{ width: '100%' }}></progress>
        </div>
    );
};

export default ProgressTracker;
