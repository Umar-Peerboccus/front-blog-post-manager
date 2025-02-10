import { useState, useEffect } from 'react';
import PostList from "../components/PostList";
import { Post } from "../models/Post";
import { getAllPosts } from '../services/PostService';
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
        <div className="py-8 px-4 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Blog Posts Manager</h1>
          <button onClick={handleCreatePost} className="w-60 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            New Post
          </button>
          <br/><br/>
          <PostList posts = {posts} />
        </div>
    );
}