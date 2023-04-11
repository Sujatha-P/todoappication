import React, { useState } from 'react';

const initialTasks = [
    { id: 1, title: 'Task 1', status: 'to-do' },
    { id: 2, title: 'Task 2', status: 'to-do' },
    { id: 3, title: 'Task 3', status: 'to-do' },
];

const Todo = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleAddTask = () => {
        const newTask = { id: tasks.length + 1, title: newTaskTitle, status: 'to-do' };
        setTasks([...tasks, newTask]);
        setNewTaskTitle('');
    };

    const handleUpdateTaskStatus = (id, status) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, status };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (id) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    };

    const handleNewTaskTitleChange = (event) => {
        setNewTaskTitle(event.target.value);
    };

    return (
        <div className='p-3 m-3 '>
            <h1 className='text-center'>Todo App</h1>
            <div>
            <h2>Add a Task</h2>
            <div>
                <input type="text" value={newTaskTitle} onChange={handleNewTaskTitleChange} className='form-control w-50' />
                <button onClick={handleAddTask}>Add</button>
            </div>
            </div>
            <div className='d-flex d-row d-wrap'>
                <div className='cardStyle'>
                    <h2>To-Do</h2>
                    <ul>
                        {tasks.filter(task => task.status === 'to-do').map(task => (
                            <li key={task.id}>
                                {task.title}
                                <button  className="btn btn-outline-secondary" onClick={() => handleUpdateTaskStatus(task.id, 'inprogress')}>InProgress</button>
                                <button  className="btn btn-outline-danger" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='cardStyle'>

                    <h2>In Progress</h2>
                    <ul>
                        {tasks.filter(task => task.status === 'inprogress').map(task => (
                            <li key={task.id}>
                                {task.title}
                                <button className="btn btn-outline-secondary" onClick={() => handleUpdateTaskStatus(task.id, 'to-do')}>Back</button>
                                <button className="btn btn-outline-success" onClick={() => handleUpdateTaskStatus(task.id, 'completed')}>Completed</button>
                                <button className="btn btn-outline-danger" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='cardStyle'>

                    <h2>Completed</h2>
                    <ul>
                        {tasks.filter(task => task.status === 'completed').map(task => (
                            <li key={task.id}>
                                {task.title}
                                <button className="btn btn-outline-secondary" onClick={() => handleUpdateTaskStatus(task.id, 'inprogress')}>Undo</button>
                                <button className="btn btn-outline-danger" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;
