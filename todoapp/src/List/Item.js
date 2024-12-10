import React from "react";
//useStateはReact.useStateのオブジェクトだが、{}で取り出すことでそのまま使える。

const Item = ({ content, completed, id, deleteTodo, toggleCompleted }) => {
    const handleDelete = () => {
        deleteTodo(id);
    };
    const handleCheck = () => {
        toggleCompleted(id);
    };
    // useState(初期値) => [現在の状態の参照,状態を更新する関数]
    //この関数で状態を更新すると、描画も更新される。
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleCheck}
            />
            {/* jsx内ではJSの処理を使うには{}で括る必要がある */}
            <span
                style={
                    { textDecoration: completed ? "line-through" : "none" }
                }
            >{content}</span>
            <button onClick={handleDelete}>削除</button>
        </li >
    );
};

export default Item;