import { _id, format, getDb } from "./mongo-utils";
import { IResource } from "./types";

export async function getResources(id: string) {
    const data: IResource[] = [];

    await using db = await getDb();
    
    const cursor = db.RC.find({$expr: { $eq: [ { $arrayElemAt: ["$parentID", -1] }, _id(id) ]}});

    for await (const object of cursor) {
        const parsedData = format.from<IResource>(object);
        data.push(parsedData);
    }

    return data || [];
}

export async function getfolderDetail(id: string) {
    const data: IResource[] = [];

    await using db = await getDb();
    
    const cursor = db.RC.find({ _id: _id(id)});

    for await (const object of cursor) {
        const parsedData = format.from<IResource>(object);
        data.push(parsedData);
    }

    return data || [];
}