import { useState } from 'react';

const TodoListApp = () => {

    const [tasks, setTasks] = useState(["kdjhashd", "kjdshdkashd", "djsahdk"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        if (newTask.trim !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const deleteTask = (index) => {

        const updatedTasks = tasks.filter((_, i) => { return index !== i });
        console.log(updatedTasks)
        setTasks(updatedTasks);
    }

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={(e) => handleInputChange(e)} />
                <button className="add-button"
                    onClick={addTask}>
                    Add Task
                </button>
            </div>

            <ol>
                {tasks?.map((task, index) => {
                    return <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)} >⬆️</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)} >⬇️</button>
                    </li>
                })}
            </ol>
        </div>
    )
}

export default TodoListApp;