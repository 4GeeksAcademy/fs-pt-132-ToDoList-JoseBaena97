import React from "react";
const TaskItem = ({ task, onDelete }) => {
    return (
        <li>
            {task} <button className="delete-btn" onClick={onDelete}>x</button>
        </li>
    );
};

export default TaskItem;