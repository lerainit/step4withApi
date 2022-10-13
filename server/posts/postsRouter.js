import express from "express";
import { getPosts,addNewPost, editPosts,deletePost } from "./postsControllers.js";

const postsRouter = express.Router()


postsRouter.get('',getPosts)

postsRouter.post('',addNewPost)
postsRouter.put('',editPosts)

postsRouter.delete('',deletePost)

export default postsRouter