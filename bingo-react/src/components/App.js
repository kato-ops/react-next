import React from "react";

import BingoSheet from "./BingoSheet";

const createRandArray = (len, min, max) => {
    const arr = [];
    while (arr.length < len) {
        const rand = Math.floor(Math.random() * (max + 1 - min) + min);
        if (!arr.includes(rand)) {
            arr.push(rand);
        }
    }
    return arr;
};

const transpose = array => array[0].map((_, column) => array.map(row => row[column]));

const App = () => {
    const initSheet = transpose(Array(5).fill(0).map((_, columnIndex) => {
        return createRandArray(5, columnIndex * 15 + 1, columnIndex * 15 + 15)
            .map((item, rawIndex) => {
                if (columnIndex === 2 && rawIndex === 2) {
                    return {
                        item: "free",
                        isHit: true
                    };
                }
                else {
                    return {
                        item,
                        isHit: false
                    };
                }
            });
    }));

    return (
        <BingoSheet initSheet={initSheet}/>
    );
};

export default App;