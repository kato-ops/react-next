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

const transpose = array => array[0].map((_, column) => array.map(row => row[column]));

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

    const [restItem, setRestItem] = useState(Array(75).fill(0).map((_, i) => i + 1));

    const rollItem = () => {
        if (restItem.length !== 0) {
            const hitIndex = Math.floor(Math.random() * restItem.length);
            const hitItem = restItem[hitIndex];
            setRestItem(restItem.toSpliced(hitIndex, 1));

            window.alert(`数字は${hitItem}番です！`);
            const hitCell = sheet.flat().find(({ item }) => item === hitItem);
            if (hitCell) {
                setSheet(sheet.map(row => row.map(cell => {
                    if (cell.item === hitItem) {
                        cell.isHit = true;
                    }
                    return cell;
                })));
            }
        }
        else {
            window.alert("もう終わりです！");
        }
    }

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
                                        row.map((cell, index) => (
                                            <Cell
                                                item={cell.item}
                                                isHit={cell.isHit}
                                                key={`cell_${index}`}
                                            />
                                        ))
                                    }
                                </tr>
                            );
                        })
                    }
                </table>
                <button
                    onClick={rollItem}
                >
                    セット
                </button>
            </div>
        </>
    );
};

export default BingoSheet;