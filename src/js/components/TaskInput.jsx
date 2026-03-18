import React, { useState } from "react";

const TaskInput = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            onAddTask(inputValue);
            setInputValue("");
        }
    };

    return (
        <li>
            <input
                type="text"
                placeholder="¿Qué tengo que hacer?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </li>
    );
};

export default TaskInput;