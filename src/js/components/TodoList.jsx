import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newText) => {
        setTasks([...tasks, newText]);
    };

    const deleteTask = (indexToDelete) => {
        setTasks(tasks.filter((_, i) => i !== indexToDelete));
    };

    return (
        <div className="container">
            <h1>Mis Tareas</h1>
            <ul>
                {/* Añadir tareas */}
                <TaskInput onAddTask={addTask} />

                {/* Lista de tareas */}
                {tasks.length === 0 ? (
                    <li>No hay tareas aún</li>
                ) : (
                    tasks.map((task, index) => (
                        <TaskItem 
                            key={index} 
                            task={task} 
                            onDelete={() => deleteTask(index)} 
                        />
                    ))
                )}
            </ul>
        </div>
    );
};

export default TodoList;