import React, { useState } from "react";
//useStateはReact.useStateのオブジェクトだが、{}で取り出すことでそのまま使える。

const Item = ({ content }) => {
    const [isDone, setIsDone] = useState(false);
    // useState(初期値) => [現在の状態の参照,状態を更新する関数]
    return (
        <li>
            <input
                type="checkbox"
                onChange={() => {
                    setIsDone(!isDone);
                }}
            />
            {/* jsx内ではJSの処理を使うには{}で括る必要がある */}
            <span
                style={
                    { textDecoration: isDone ? "line-through" : "none" }
                }
            >{content}</span>
        </li >
    );
};

export default Item;