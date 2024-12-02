import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { nanoid } from "nanoid";

//コンポーネントは最初を大文字にする必要がある。
const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = content => {
        if (content) {
            setTodos([...todos, { content, id: nanoid() }]);

            //追加処理の完了後、フォームの入力値がフォーム内に残ったままになっています。追加処理の完了後にフォームを空にしましょう。
        }
        else {
            window.alert("入力欄が空です！");
        }
    };
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        //返り値としてReactコンポーネントを返す必要がある。
        //また、返すコンポーネントは一つで有る必要がある。=>divなどでラップする。
        //React.Fragmentでもラップできる。これは取り敢えずまとめるだけで、要素としては存在しない。
        //fragmentは空のタグでもOK
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} />
        </>
    );
};

export default App;