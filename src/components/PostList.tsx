import { Link } from "react-router-dom";
import { PostListProps } from "../models/props/PostListProps";
import PostCard from "./PostCard";

export default function PostList({ posts } : PostListProps) {
    return (
        <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-6">
            { posts.map((post) => (
                // eslint-disable-next-line no-template-curly-in-string
                <Link to = {`/${post.id}`} state={{ post }}>
                    <PostCard key={post.id} post = {post} />
                </Link>
            ))}
        </div>
    );
}