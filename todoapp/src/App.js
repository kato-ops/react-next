import React from "react";
import Form from "./Form";
import List from "./List";

//コンポーネントは最初を大文字にする必要がある。
const App = () => {
    return (
        //返り値としてReactコンポーネントを返す必要がある。
        //また、返すコンポーネントは一つで有る必要がある。=>divなどでラップする。
        //React.Fragmentでもラップできる。これは取り敢えずまとめるだけで、要素としては存在しない。
        //fragmentは空のタグでもOK
        <>
            <h1>Todo App</h1>
            <Form></Form>
            <List></List>
        </>
    );
};

export default App;