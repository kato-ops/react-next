import React, { useEffect, useState } from "react";

import { CellContent } from "@/types/spreadsheet";

import styles from "@/styles/Spreadsheet.module.css";
import Cell from "./Cell";

export default function Spreadsheet() {
    const [cellContents, setCellContents] = useState<Array<Array<CellContent>>>([
        [1, 2, 3,],
        [4, 5, 6,],
        [7, 8, 9,],
    ]);

    const perpetuation = () => {
        // const data = JSON.stringify(cellContents);
        // window.localStorage.setItem("cells", data);

        fetch("/api/cells", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ cells: cellContents }),
        });
    };

    const setPersistedData = async () => {
        const response = await fetch("/api/cells");
        const persistedData = JSON.parse(await response.text());
        if (persistedData.cells) {
            setCellContents(persistedData.cells);
        }
    };

    //渡した関数をレンダリング実行後に実行させる
    useEffect(() => {
        // const persistedData = window.localStorage.getItem('cells');
        // if (persistedData) {
        //     setCellContents(JSON.parse(persistedData));
        // }

        //useEffectには返り値のないオブジェクトを指定する必要がある。
        //asyncを付けられるのはPromiseオブジェクトのみなので、Promiseが帰ってきてしまう為に直接指定は出来ない。
        //なので、一度ラップしてから渡す必要がある。
        setPersistedData();
        //第二引数が[]の場合、初回レンダリング時のみ実行
    }, []);

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

    const addColumn = () => {
        setCellContents(
            cellContents.map(row => [...row, 0])
        );
    };
    const removeColum = () => {
        setCellContents(
            cellContents.map(row => row.slice(0, -1))
        );
    };

    return (
        <div className={styles.container}>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        {
                            //各列は前提として同じ長さなので、一列目の長さ分だけ見出しを生成すれば問題ない
                            //ただ、このままだとZの次がAAにならないので、変更は必要
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
            <button onClick={addColumn}>+ column</button>
            <button onClick={removeColum}>- column</button>
            <br />
            <button onClick={perpetuation}>Save</button>
            {/* <button onClick={() => window.localStorage.removeItem("cells")}>Reset</button> */}
        </div>
    );
};