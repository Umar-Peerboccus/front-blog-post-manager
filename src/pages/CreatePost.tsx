import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { CreatePostModel } from "../models/CreatePostModel";
import { createPost } from "../services/PostsService";

export default function CreatePost() {
  const navigate = useNavigate();
  
    const handleSubmit = async (data : CreatePostModel) => {
        await createPost(data);

        // Go back to homepage after creation.
        navigate("/");
    };
    
    return (
        <div className="py-8 px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Create A New Blog Post</h1>
          <PostForm onSubmit={handleSubmit}/>
        </div>
      );
}