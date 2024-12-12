import { useState, KeyboardEvent } from "react";

import { CellContent } from "@/types/spreadsheet";

interface Props {
    content: CellContent;
    onChange: (updated: CellContent) => void;
};

export default function Cell({ content: initialContent, onChange }: Props) {
    //<>はジェネリクス。定義時に枠を作ってると使用時に型指定できる。
    const [editing, setEditing] = useState<boolean>(false);
    const [content, setContent] = useState<CellContent>(initialContent);

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

    return (
        <td onClick={handleClickCell}>
            {
                editing ? (
                    <input
                        value={content}
                        //これでオブジェクトが出来た段階で自動的にフォーカスが当たる
                        ref={input => input ? input.focus() : undefined}
                        onClick={(e) => { e.stopPropagation() }}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setContent(e.target.value)}
                    />)
                    : initialContent
            }
        </td >
    );
};