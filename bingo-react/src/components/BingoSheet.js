import React, { useState } from "react";

import Cell from "./Cell";
import styles from "../styles/BingoSheet.module.css"

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

//現在、1h20m
//解析すること
const transpose = a => a[0].map((_, c) => a.map(r => r[c]));

const BingoSheet = () => {
    const newSheet = transpose(Array(5).fill(0).map((_, columnIndex) => {
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

    const [sheet, setSheet] = useState(newSheet);


    const rest = new Array(75).fill(0).map((_, i) => i + 1);

    return (
        <>
            <title>ビンゴシート</title>
            <div className={styles.container}>
                <table>
                    <tr>
                        <td>B</td>
                        <td>I</td>
                        <td>N</td>
                        <td>G</td>
                        <td>O</td>
                    </tr>
                    {
                        sheet.map((row) => {
                            return (
                                <tr>
                                    {
                                        row.map((cell) => (
                                            <Cell
                                                test={cell.item}
                                            />
                                        ))
                                    }
                                </tr>
                            );
                        })
                    }
                </table>
                <button>セット</button>
            </div>
        </>
    );
};

export default BingoSheet;