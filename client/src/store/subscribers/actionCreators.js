import { addSubscriber, setSubscribers } from "./actions";




export const setSubscribersAC =() =>  async (dispatch) =>{
    if(!localStorage.getItem('users')){
        try {
            const users = await fetch('users.json').then(response =>response.json());
         console.log(users)
    
        
         localStorage.setItem('users',JSON.stringify(users))
               
   
                dispatch({ type:setSubscribers})
            
         
    
        } catch (err) {
         
            console.log(err);
        }}
        else{
            dispatch({type:setSubscribers})
        }}

export const addSubscriberAC = (payload) =>({type:addSubscriber,payload})