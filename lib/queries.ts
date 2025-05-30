import { format, getDb } from "./mongo-utils";
import { IDBResource } from "./types";

export async function getResources(id: string) {
    const data: IDBResource[] = [];

    await using db = await getDb();
    
    const cursor = db.RC.find({$expr: { $eq: [ { $arrayElemAt: ["$parentID", -1] }, id ]}});

    for await (const object of cursor) {
        const parsedData = format.from<IDBResource>(object);
        data.push(parsedData);
    }

    return data || [];
}