import { setPosts } from "./actions";

 export const setPostsAC =()=> async (dispatch)=>{
    if(!localStorage.getItem('posts')){
        try {
            const posts = await fetch('posts.json').then(response =>response.json());
         
                localStorage.setItem('posts',JSON.stringify(posts))
               
               
                dispatch({ type:setPosts})
            
         
    
        } catch (err) {
         
            console.log(err);
        }}
        else{
            dispatch({type:setPosts})
        }


}