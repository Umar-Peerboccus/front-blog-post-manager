import { PostProps } from "../models/props/PostProps";

export default function PostCard({ post } : PostProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.content}</p>
          <p className="text-gray-600">{post.author}</p>
        </div>
      );
}