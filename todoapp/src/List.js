import React from "react";
import Item from "./List/Item";

const List = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {
                todos.map((todo) => (<Item
                    content={todo.content}
                    key={todo.id}
                    id={todo.id}
                    deleteTodo={deleteTodo}
                />))
            }
        </ul>
    );
};

export default List;