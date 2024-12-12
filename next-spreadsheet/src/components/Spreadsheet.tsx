import React, { useState } from "react";

import { CellContent } from "@/types/spreadsheet";

import styles from "@/styles/Spreadsheet.module.css";
import Cell from "./cell";

export default function Spreadsheet() {
    const [cellContents, setCellContents] = useState<Array<Array<CellContent>>>([
        [1, 2, 3,],
        [4, 5, 6,],
        [7, 8, 9,],
    ]);

    const updateCell = (updated: CellContent, rowIndex: number, cellIndex: number) => {
        const updatedCellContents = [...cellContents];
        updatedCellContents[rowIndex][cellIndex] = updated;
        setCellContents(updatedCellContents);
    };

    const addRow = () => {
        setCellContents([
            ...cellContents,
            Array(cellContents[0].length).fill(0)
        ]);
    };
    const removeRow = () => {
        setCellContents(cellContents.slice(0, -1));
    };

    return (
        <div className={styles.container}>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        {//各列は前提として同じ長さなので、一列目の長さ分だけ見出しを生成すれば問題ない
                        cellContents[0].map((_, i) => (
                            <th>{String.fromCharCode(65 + i)}</th>
                        ))}
                    </tr>
                    {
                        cellContents.map((row, rowIndex) => {
                            return (
                                <tr>
                                    <th>{rowIndex + 1}</th>
                                    {
                                        row.map((cell, cellIndex) => (
                                            <Cell
                                                content={cell}
                                                onChange={(updated: CellContent) => updateCell(updated, rowIndex, cellIndex)}
                                            />
                                        ))
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <button onClick={addRow}>+ row</button>
            <button onClick={removeRow}>- row</button>
            <br />
            <button>+ column</button>
            <button>- column</button>
        </div>
    );
};