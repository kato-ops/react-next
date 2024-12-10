import React from "react";
import Item from "./List/Item";

const List = ({ todos, deleteTodo, toggleCompleted }) => {
    return (
        <ul>
            {
                todos.map((todo) => (<Item
                    content={todo.content}
                    completed={todo.completed}
                    key={todo.id}
                    id={todo.id}
                    deleteTodo={deleteTodo}
                    toggleCompleted={toggleCompleted}
                />))
            }
        </ul>
    );
};

export default List;