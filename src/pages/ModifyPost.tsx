import { useNavigate } from "react-router-dom";
import ModifyPostForm from "../components/ModifyPostForm";
import { updatePost, deletePost } from "../services/PostService";
import { UpdatePostModel } from "../models/UpdatePostModel";

export default function ModifyPost() {
    const navigate = useNavigate();
        
    const handleSubmit = async (data : UpdatePostModel) => {
        await updatePost(data);

        // Go back to homepage after updating.
        navigate("/");
    };

    const handleDelete = async (id : number) => {
        await deletePost(id);

        // // Go back to homepage after updating.
        navigate("/");
    };

    return (
        <div className="py-8 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Modify Blog Post</h1>
            <ModifyPostForm onSubmit={handleSubmit} onDelete={handleDelete} />
        </div>
    );
}