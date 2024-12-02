import React, { useState } from "react";

const Form = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') {
            window.alert("入力欄が空です！");
        }
        else {
            addTodo(text);
        }
        setText('');
    };
    //return前というか、jsxを()してreturnする必要がある。
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                //こうすることで、valueがStateの更新の際に変更される？
                value={text}
                onChange={e => {
                    setText(e.target.value);
                }} />
        </form>
    );
};

export default Form;