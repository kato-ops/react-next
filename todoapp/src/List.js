import React from "react";
import Item from "./List/Item";

const List = () => {
    return (
        <ul>
            <Item content="課題をする"></Item>
            <Item content="洗濯をする"></Item>
            <Item content="電話をする"></Item>
        </ul>
    );
};

export default List;