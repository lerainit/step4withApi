import { renderBackground,hideBackground,setBackground} from "./actions";
export const setBackgroundAC =()=> async (dispatch)=> {

  if  (!localStorage.getItem('products')){
        try {
            const products = await fetch('productsJSON.json').then(response =>response.json());
         console.log(products)
    
    //  const  products2 = products[1]
        
            localStorage.setItem(` products`,JSON.stringify( products))
               
             
                dispatch({ type:setBackground})
            
         
    
        } catch (err) {
         
            console.log(err);
        }}
        else{
            dispatch({type:setBackground})
        }

}

 export const renderBackgroundAC = (payload) => ({type:renderBackground,payload})

 export const hideBackgroundAC =(payload) =>({type:hideBackground,payload})