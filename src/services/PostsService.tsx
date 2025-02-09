import { Post } from "../models/Post";
import axios from "axios";
import { CreatePostFormProps } from "../models/props/CreatePostFormProps";
import { CreatePostModel } from "../models/CreatePostModel";

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
  