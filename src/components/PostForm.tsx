import { FormEvent, useState } from "react";
import { CreatePostFormProps } from "../models/props/CreatePostFormProps";

export default function PostForm({ onSubmit } : CreatePostFormProps) {

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    const isDisabled = title.trim() === "" || content.trim() === "" || author.trim() === "";
    
    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        
        // Use a callback function to pass data from child to parent.
        onSubmit({
            title : title,
            content : content,
            author : author,
            isPublished : false,
            isDeleted : false
        });
        setTitle("");
        setContent("");
        setAuthor("");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
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
          <button 
          type="submit"
          disabled={isDisabled}
          className={`w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 
                    ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
          >
            Save
          </button>
        </form>
      );
}