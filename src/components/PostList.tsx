import { PostListProps } from "../models/props/PostListProps";
import PostCard from "./PostCard";

export default function PostList({ posts } : PostListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            { posts.map((post) => <PostCard post = {post} />) }
        </div>
    );
}