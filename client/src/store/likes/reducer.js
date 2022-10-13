import { incrementLikes,decrementLikes,setCounter } from "./actions";

const initialValue ={
    counter:JSON.parse(localStorage.getItem('products')),
    isLoading:true
}

const likesReducer = (state = initialValue,action) =>{

    switch (action.type) {
        case setCounter:{
  
            return {counter:JSON.parse(localStorage.getItem('counter')),isLoading:false}
        }
        case incrementLikes: {
            let productsArr =state.counter
            console.log(productsArr)
            let products = productsArr[action.payload.userIndex].posts
 let likes = products[action.payload.index].likes


products[action.payload.index].likes = likes + 1

 
 
 let counter =  products[action.payload.index].likes 

 fetch('http://localhost:3001/posts', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({post:products[action.payload.index] , userIndex:action.payload.userIndex,index:action.payload.index })
})


localStorage.setItem('counter',JSON.stringify(productsArr))

          return {counter:JSON.parse(localStorage.getItem('counter')),isLoading:false}
        }
  
      
  
        case decrementLikes: {
            let productsArr =state.counter
            let products = productsArr[action.payload.userIndex].posts
 let likes = products[action.payload.index].likes


products[action.payload.index].likes = likes - 1

 
 
 let counter =  products[action.payload.index].likes 


localStorage.setItem('counter',JSON.stringify(productsArr))

          return {counter:JSON.parse(localStorage.getItem('counter')),isLoading:false}
        }
       default: {
          return state
        }


    }



}
export default likesReducer