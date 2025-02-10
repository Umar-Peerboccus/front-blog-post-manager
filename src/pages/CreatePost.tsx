import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { CreatePostModel } from "../models/CreatePostModel";
import { createPost } from "../services/PostService";
import { useContext } from "react";
import DisplayNotification from "../components/DisplayNotification";
import { NotificationContext } from "../store/NotificationContext";

export default function CreatePost() {
    const navigate = useNavigate();
    const notification = useContext(NotificationContext);

    const displayNotification = (message: string) => {
        notification?.showNotification(message);
        
        // Delay navigation to allow the notification to be visible
        setTimeout(() => {
          // Go back to homepage after creation.
          navigate("/");
        }, 2000); // Navigate after 2 seconds
    }

    const handleSubmit = async (data : CreatePostModel) => {
        try {
            await createPost(data);
            displayNotification("Blog post created successfully.")
        }
        catch (error) {
          displayNotification("Error in creating blog post.")
          console.error("Failed to create a post:", error);
          throw error;
        }
    };

    const handleCloseNotification = () => {
      notification?.hideNotification();
    }

    return (
        <div className="py-8 px-4">
          <DisplayNotification notificationDetail={notification?.notification} handleCloseNotification={handleCloseNotification} />
          <h1 className="text-3xl font-bold mb-6 text-center">Create A New Blog Post</h1>
          <PostForm onSubmit={handleSubmit}/>
        </div>
      );
}