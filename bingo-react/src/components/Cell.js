import React from "react";

const Cell = ({ item, isHit }) => {
    const hitStyle = {
        backgroundColor: "black",
        color: "rgb(70, 206, 216)"
    };

    return (
        <td
            style={isHit ? hitStyle : null}
        >
            {item}
        </td>
    );
};

export default Cell;