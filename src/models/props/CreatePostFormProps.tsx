import { CreatePostModel } from "../CreatePostModel";

export interface CreatePostFormProps {
    onSubmit : (createPost : CreatePostModel) => void;
}