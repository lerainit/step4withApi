import express from "express";
import chalk from "chalk";
import { resolve } from 'path';
import bodyParser from 'body-parser'
import cors from 'cors'
import postsRouter from './posts/postsRouter.js'
import userRouter from "./users/userRouter.js";
import newPostsRouter from "./posts/newPosts/newPostsRouter.js";

const logger = (req,res,next) =>{

}

const app = express();
const PORT = 3001;
app.use(express.static(resolve('static')))
app.use(express.json())
app.use(cors())

app.use('/posts',postsRouter)
app.use('/users',userRouter)
app.use('/newPosts',newPostsRouter)


app.listen(PORT,()=>{
    console.log(chalk.cyan('-------------------------------------------'))
    console.log(chalk.magenta(`Server is listening on http://localhost:${PORT}`))
    console.log(chalk.cyan('-------------------------------------------'))
})