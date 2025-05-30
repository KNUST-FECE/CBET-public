
export type IQuery = {
    params: Promise<{[key: string]: string}>,
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
};

export type IResources = { 
    type: "file" | "folder", 
    title: string, 
    totalFolder?: number, 
    totalFiles?: number, 
    id: string
}

export interface IDBResource {
    id: string
    name: string
    type: "folder" | "file"
    fileUrl: string | null
    fileType: string | null
    parentID: string[]
    fileCount: number
    folderCount: number
    creatorID: string
    status: string
    size: string
    updatedAt: Date
    createdAt: Date
}