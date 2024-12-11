import { useEffect, useState, KeyboardEvent } from "react";

import { CellContent } from "@/types/spreadsheet";

interface Props {
    content: CellContent;
};

export default function Cell({ content: initialContent }: Props) {
    //<>はジェネリクス。定義時に枠を作ってると使用時に型指定できる。
    const [editing, setEditing] = useState<boolean>(false);
    const [content, setContent] = useState<CellContent>(initialContent);

    const handleInput = () => {
        setEditing(!editing);
    };
    const handleConfirme = (event: KeyboardEvent) => {
        if (["Enter", "Escape"].includes(event.key)) {
            setEditing(false);
        }
    };

    return (
        <td onClick={handleInput}>
            {
                editing ?
                    <input
                        value={content}
                        //これでオブジェクトが出来た段階で自動的にフォーカスが当たる
                        ref={input => input ? input.focus() : undefined}
                        onClick={(e) => { e.stopPropagation() }}
                        onKeyDown={handleConfirme}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    : content
            }
        </td>
    );
};