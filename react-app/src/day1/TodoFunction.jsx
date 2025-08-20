import React, { useState } from 'react'

const TodoFunction = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const update = (e) => setTask(e.target.value);

    const add = () => {
        if (!task.trim()) return;
        setTodos([...todos, task]);
        setTask('');
    };

    const delet = (i) => {
        setTodos(todos.filter((_, index) => index !== i));
    };

    return (
        <div>
        <input
            type="text"
            value={task}
            onChange={update}
            placeholder="Enter the task"
            style={{ padding: '10px' }}
        />
        <button onClick={add} style={{ padding: '10px' }}>Add</button>

        <ul>
            {todos.map((todo, i) => (
            <li key={i}>
                {todo}
                <button onClick={() => delet(i)}>X</button>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default TodoFunction
