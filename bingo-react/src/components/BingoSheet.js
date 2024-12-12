import React, { useState } from "react";

import Cell from "./Cell";
import styles from "../styles/BingoSheet.module.css";


const BingoSheet = ({ initSheet }) => {
    const [sheet, setSheet] = useState(initSheet);

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
    };

    return (
        <>
            <title>ビンゴシート</title>
            <div className={styles.container}>
                <table>
                    <thead>
                        <tr>
                            <td>B</td>
                            <td>I</td>
                            <td>N</td>
                            <td>G</td>
                            <td>O</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sheet.map((row, rowIndex) => {
                                return (
                                    <tr key={`row_${rowIndex}`}>
                                        {
                                            row.map((cell) => (
                                                <Cell
                                                    item={cell.item}
                                                    isHit={cell.isHit}
                                                    key={`cell_${cell.item}`}
                                                />
                                            ))
                                        }
                                    </tr>
                                );
                            })
                        }
                    </tbody>
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