import React from "react";

const Cell = ({ item, isHit }) => {
    const hitNum = {
        "background-color": "black",
        "color": "rgb(70, 206, 216)"
    }

    return (
        <>
            <td
                style={isHit ? hitNum : null}
            >
                {item}
            </td>
        </>
    );
};

export default Cell;