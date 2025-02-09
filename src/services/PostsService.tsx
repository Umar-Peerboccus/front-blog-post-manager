import { Post } from "../models/Post";
import axios from "axios";

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
  