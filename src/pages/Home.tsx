import { useState, useEffect } from 'react';
import PostList from "../components/PostList";
import { Post } from "../models/Post";
import { getAllPosts } from '../services/PostsService';
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getAllPosts();
            setPosts(data);
        };

        getPosts();
    }, []);

    const handleCreatePost = () => {
        navigate("/create");
    };

    return (
        <div className="py-8 px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts Manager</h1>
          <button onClick={handleCreatePost} className="w-60 place-content-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            New Post
          </button>
          <PostList posts = {posts} />
        </div>
    );
}