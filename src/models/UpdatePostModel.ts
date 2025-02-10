export interface UpdatePostModel {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    isPublished: boolean;
    isDeleted: boolean;
}