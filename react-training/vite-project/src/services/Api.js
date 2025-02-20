import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetch all posts
export const fetchPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Add a new post
export const addPost = async (post) => {
  const res = await axios.post(API_URL, post);
  console.log(post)
  return res.data;
};

// Update a post
export const updatePost = async (post) => {
  const res = await axios.put(`${API_URL}/${post.id}`, post);
  return res.data;
};

// Delete a post
export const deletePost = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  console.log(id)
  return id;
};