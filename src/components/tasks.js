import { Icon } from '@iconify/react';

function Tasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskDone = (index) => {
        const updatedTasks = [...storedTasks];
        updatedTasks[index].done = !updatedTasks[index].done;
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        window.location.reload();
    }

    const removeTask = (index) => {
        const updatedTasks = [...storedTasks];
        updatedTasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        window.location.reload();
    }

    return (
        <div id='tasksDisplay'>
            {storedTasks.map((task, index) => (
                <span id='task' key={index}>
                    <div id='colorBarre' style={{ backgroundColor: task.done ? 'green' : task.color }}></div>
                    <span id='taskTitle'>{task.task}</span>
                    {task.done ? (
                        <Icon icon="material-symbols-light:delete-outline" id='delete' onClick={() => removeTask(index)} />
                    ) : (
                        <input type='checkbox' id='done' onChange={() => taskDone(index)} checked={task.done} />
                    )}
                </span>
            ))}
        </div>
    );
}

export default Tasks;
