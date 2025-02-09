import { UpdatePostModel } from "../UpdatePostModel";

export interface UpdatePostFormProps {
    onSubmit : (updatePost : UpdatePostModel) => void;
}