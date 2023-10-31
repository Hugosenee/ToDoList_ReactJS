import { useState , useEffect } from "react"

function Tasks () {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks)
    }, [])

    return (
        <div id="taskDisplay">
            <h2>Tasks</h2>

            {tasks.map(task => (
                <span>{task}</span>
            ))}
        </div>
    )
}

export default Tasks