import { UpdatePostModel } from "../UpdatePostModel";

export interface ModifyPostFormProps {
    onSubmit : (updatePost : UpdatePostModel) => void;
    onDelete : (id: number) => void;
}