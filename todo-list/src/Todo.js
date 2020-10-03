import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

import './Todo.css'

function Todo({ todo, toggleComplete, removeTodo, typeNUM }) {


    var constants = require('./constants');


    function handleCheckboxClick() {
        toggleComplete(todo.id);
        console.log("This is a Button")
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
        return <h1> Delete button </h1>
    }

    return (
        <ListItem style={{ display: "flex" }}>
            <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
            <Typography
                variant="body1"
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </Typography>

            <Typography variant="overline" class="statusToDo" style={{color:constants.typeEnum[todo.type]}}> {todo.type} </Typography>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default Todo;