import { incrementLikes,decrementLikes,setCounter } from "./actions";

export  const incrementLikesAC =(payload)=>({type:incrementLikes,payload})

export const decrementLikesAC =() =>({type:decrementLikes})
export const setCounterAC = () => async (dispatch) => {

    if(!localStorage.getItem('counter')){
        try {
            const {status,data} = await fetch('http://localhost:3001/posts').then(response =>response.json());

         
         
                localStorage.setItem('counter',JSON.stringify(data))
               
               
                dispatch({ type:setCounter})
            
         
    
        } catch (err) {
         
            console.log(err);
        }}
        else{
            dispatch({type:setCounter})
        }
    
    } 