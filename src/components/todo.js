import '../App.css';
import { useState , useEffect } from 'react';


function Todo () {

    const [task, setTask]= useState('')

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        storedTasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(storedTasks))
        window.location.reload()
    }


    return (
        <div>
            <h2>To Do List</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='task' value={task} onChange={handleChange}></input>
                <button type='submit'>+</button>
            </form>
        </div>
    )

}

export default Todo;