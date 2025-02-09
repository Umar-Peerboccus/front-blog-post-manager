import { Post } from "../models/Post";
import axios from "axios";
import { CreatePostModel } from "../models/CreatePostModel";
import { UpdatePostModel } from "../models/UpdatePostModel";

export const getAllPosts  = async () => {
  try {
    const response = await axios.get<Post[]>('http://localhost:5000/api/blog');
    return response.data;
  } 
  catch (error) {
    console.error("Failed to get posts:", error);
    throw error;
  }
};

export const createPost =  async (postData : CreatePostModel) => {
  try {
    const response = await axios.post<number>('http://localhost:5000/api/blog', postData);
    return response.data;
  }
  catch (error) {
    console.error("Failed to create a post:", error);
    throw error;
  }
}

export const updatePost = async (postData: UpdatePostModel) => {
  try {
      const updatePostModelDTO = {
          title: postData.title,
          content: postData.content,
          author: postData.author,
          createdAt: postData.createdAt,
          isPublished: postData.isPublished,
          isDeleted: postData.isDeleted
      }
      
      await axios.put(`http://localhost:5000/api/blog/${postData.id}`, updatePostModelDTO)
  }
  catch (error) {
    console.error("Failed to update a post:", error);
    throw error;
  }
}
  