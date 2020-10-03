import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./AppForm";
import TodoList from "./ToDoList";

const LOCAL_STORAGE_KEY = "todo-list-todos";



function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // fires when app component mounts to the DOM
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    useEffect(() => {
        // fires when todos array gets updated
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    return (
        <div className="App">
            <Typography style={{ padding: 16 }} variant="h1">
                React Todo
            </Typography>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos}
                      removeTodo={removeTodo}
                      toggleComplete={toggleComplete} />
            <h2> This should be the footing </h2>
        </div>
    );
}

export default App;
