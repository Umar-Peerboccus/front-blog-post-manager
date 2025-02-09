import { FormEvent, useState } from "react";
import { ModifyPostFormProps } from "../models/props/ModifyPostFormProps";
import { useLocation } from "react-router-dom";
import { Post } from "../models/Post";

export default function ModifyPostForm({ onSubmit, onDelete } : ModifyPostFormProps ) {

    const location = useLocation();
    const { post } = location.state as { post: Post };
    const [title, setTitle] = useState<string>(post.title);
    const [content, setContent] = useState<string>(post.content);
    const [author, setAuthor] = useState<string>(post.author);

    const handleUpdatePost = (e : FormEvent) => {
        e.preventDefault();
        
        // Use a callback function to pass data from child to parent.
        onSubmit({
            id: post.id,
            title : title,
            content : content,
            author : author,
            createdAt: post.createdAt,
            isPublished : false,
            isDeleted : false
        });

        setTitle("");
        setContent("");
        setAuthor("");
    };

    const handleDeletePost = (e : FormEvent) => {
      e.preventDefault();

      onDelete(post.id);
      setTitle("");
      setContent("");
      setAuthor("");
    }

    return (
        <form className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Modify a Post</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 mb-4 border rounded h-32"
          ></textarea>
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button onClick={handleUpdatePost} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Update
          </button>
          <br/>
          <br/>
          <button onClick={handleDeletePost} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
            Delete
          </button>
        </form>
      );
}