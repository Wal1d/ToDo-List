import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import SimpleSelect from "./TypeStatus";

function TodoForm({ addTodo }   ) {

    var constants = require('./constants');

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false,
        type: constants.typeEnum[1]
    });

    function handleTaskInputChange(e) {
        // e.target.value contains new input from onChange
        // event for input elements
        setTodo({ ...todo, task: e.target.value });
    }

    function handleTypeStatus(e) {
        setTodo({ ...todo, type: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault(); // prevents browser refresh
        // trim() gets rid of string whitespace
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, task: "" });
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                type="text"
                name="task"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <SimpleSelect
                type="type"
                name="status"
                typeEnum={constants.typeEnum}
                selectFun={handleTypeStatus}
                selected={todo.type}/>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TodoForm;