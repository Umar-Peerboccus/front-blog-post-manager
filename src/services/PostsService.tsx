import { Post } from "../models/Post";

export const getAllPosts = async () => {
    try {
      const response = await fetch("https://your-api-url.com/posts", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return await response.json();
    } 
    catch (error) {
      console.error("Failed to fetch posts:", error);
      throw error;
    }
  };
  