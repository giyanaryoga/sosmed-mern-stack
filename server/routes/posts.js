import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const route = express.Router();

route.get("/", getPosts);
route.post("/create-post", createPost);

export default route;
