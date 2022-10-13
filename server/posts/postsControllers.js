import { getPostsData,addNewPostData,editPostsData,deletePostData} from "./postsDataLayers.js";



export const getPosts = (req,res) =>{
    const data = getPostsData()
    res.json({status:'success',data})
}
export const addNewPost =(req,res) =>{
    const data = addNewPostData(req.body.post,req.body.userIndex)
res.json({status:'success',data})

}
export const editPosts = (req,res) =>{

    const data = editPostsData(req.body.post,req.body.userIndex,req.body.index)
    res.json({status:'success',data})
}
export const deletePost =(req,res) =>{

    deletePostData(req.body.userIndex,req.body.index)

    res.json({status:'success'})
}