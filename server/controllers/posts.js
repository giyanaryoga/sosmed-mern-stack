import PostModel from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    const postModel = await PostModel.find();

    res.status(200).json(postModel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostModel(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};
