import React, { useState, useEffect } from 'react';
import '../App.css';
import Tasks from './tasks';

function Todo() {
    const [task, setTask] = useState('');
    const [color, setColor] = useState('');
    const [erreur, setErreur] = useState('');


    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim() === '') {
            setErreur('Please enter a task');
        } else {
            const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const tasks = { task, color}

            storedTasks.push(tasks);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
            window.location.reload();
        }
    }  

    return (
        <div id='todoList'>
            <h2 id='title'>To Do List</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='task' placeholder='Task' value={task} onChange={handleChange} />
                <select name="color" id="color" value={color} onChange={handleColorChange}>
                    <option >importance</option>
                    <option value="red">very important</option>
                    <option value="orange">important</option>
                    <option value="yellow">not important</option>
                </select>
                <button type='submit'>+</button>
            </form>
            {erreur ? <p>{erreur}</p> : ''}
            
            <Tasks />
        </div>
    );
}

export default Todo;
