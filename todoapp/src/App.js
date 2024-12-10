import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { nanoid } from "nanoid";

//コンポーネントは最初を大文字にする必要がある。
const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = content => {
        setTodos([
            ...todos,
            {
                content,
                id: nanoid(),
                completed: false
            }
        ]);
    };
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const toggleCompleted = id => {
        //map直接渡すでも良いが、コールバックの方が最新のデータを参照するのでバグが起きにくいらしい。
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                //スプレット構文後のメンバを書き換えると、その値に上書きされる。
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        //返り値としてReactコンポーネントを返す必要がある。
        //また、返すコンポーネントは一つで有る必要がある。=>divなどでラップする。
        //React.Fragmentでもラップできる。これは取り敢えずまとめるだけで、要素としては存在しない。
        //fragmentは空のタグでもOK
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
        </>
    );
};

export default App;