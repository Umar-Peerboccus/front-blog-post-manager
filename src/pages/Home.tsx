import { useState, useEffect } from 'react';
import PostList from "../components/PostList";
import { Post } from "../models/Post";
import { getAllPosts } from '../services/PostsService';

export default function Home() {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getAllPosts();
            setPosts(data);
        };

        getPosts();
    }, []);

    return (
        <div className="py-8 px-4">
          <h1 className="text-3xl font-bold mb-6">Blog Posts Manager</h1>
          <PostList posts = {posts} />
        </div>
    );
}