import { useEffect, useState, KeyboardEvent } from "react";

import { CellContent } from "@/types/spreadsheet";

interface Props {
    content: CellContent;
    onChange: (updated: CellContent) => void;
};

export default function Cell({ content: initialContent, onChange }: Props) {
    //<>はジェネリクス。定義時に枠を作ってると使用時に型指定できる。
    const [editing, setEditing] = useState<boolean>(false);
    const [content, setContent] = useState<CellContent>(initialContent);

    //Spreadsheet側から値がわたってきた際に再設定されるよう指定
    useEffect(() => {
        setContent(initialContent)
        //initialContentの値が変更されたタイミングのレンダリング時に処理される
    }, [initialContent])

    const handleClickCell = () => {
        if (editing === true) {
            onChange(content);
        }
        setEditing(!editing);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            setEditing(false);
            onChange(content);
        }
        if (event.key === "Escape") {
            setEditing(false);
            setContent(initialContent);
        }
    };
    const evaluateFormula = (expression: string): number => {
        //最初の=を除いた+-*%/0~9以外を消す処理
        const sanitized = expression.slice(1).replace(/[^\+\-\*%/0-9]/g, '');
        //計算式をjavascriptの計算として処理
        return eval(sanitized);
    };

    return (
        <td onClick={handleClickCell}>
            {
                editing ? (
                    <input
                        value={content}
                        //これでオブジェクトが出来た段階で自動的にフォーカスが当たる
                        //オブジェクトのDomがrefにはいるので、そこにフォーカスさせてる
                        ref={input => input ? input.focus() : undefined}
                        onClick={(e) => { e.stopPropagation() }}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setContent(e.target.value)}
                    />)
                    : content.toString().startsWith("=") ?
                        evaluateFormula(content.toString())
                        : initialContent
            }
        </td >
    );
};