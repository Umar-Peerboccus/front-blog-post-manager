import { useNavigate } from "react-router-dom";
import ModifyPostForm from "../components/ModifyPostForm";
import { updatePost, deletePost } from "../services/PostService";
import { UpdatePostModel } from "../models/UpdatePostModel";
import { useContext } from "react";
import { NotificationContext } from "../store/NotificationContext";
import DisplayNotification from "../components/DisplayNotification";

export default function ModifyPost() {
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
        
    const handleSubmit = async (data : UpdatePostModel) => {
        try {
            await updatePost(data);
            displayNotification("Blog post updated successfully.")
        }
        catch (error) {
            displayNotification("Error in updating blog post.")
            console.error("Failed to create a post:", error);
            throw error;
        }
    };

    const handleDelete = async (id : number) => {
        try {
            await deletePost(id);
            displayNotification("Blog post deleted successfully.")
        }
        catch (error) {
            displayNotification("Error in deleting blog post.")
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
            <h1 className="text-3xl font-bold mb-6 text-center">Modify Blog Post</h1>
            <ModifyPostForm onSubmit={handleSubmit} onDelete={handleDelete} />
        </div>
    );
}