import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

import { CellContent } from "@/types/spreadsheet";

type Data = {
    //任意プロパティなのでData内部にcellsがない場合も許容される
    cells?: Array<Array<CellContent>>
};

const PATH = "./src/database/db.json";

export default function handler(
    request: NextApiRequest,
    response: NextApiResponse<Data>
) {
    const { method } = request;

    switch (method) {
        case "GET":
            if (fs.existsSync(PATH)) {
                const content = fs.readFileSync(PATH, "utf-8");
                const data = JSON.parse(content);
                response.status(200).json(data);
            } else {
                response.status(200).json({});
            }
            break;
        case "POST":
            const { cells } = request.body;
            const data = JSON.stringify({ cells });
            fs.writeFileSync(PATH, data, "utf-8");
            response.status(200).json({});
            break;
        default:
            break;
    }
};