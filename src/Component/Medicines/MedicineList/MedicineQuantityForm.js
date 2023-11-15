import React, { Fragment, useContext, useState} from "react";
import classes from "./MedicineList.module.css"
import CartContext from "../../../Store/CartContext";



const MedicineQuantityForm =props=>{  
const cartCtx=useContext(CartContext) 
const [qty,setQty]=useState(props.item.quantity)
// console.log("props in card quantity form",props)
// console.log("cartctx in card quantity form",cartCtx)
// console.log("pros.item.id",props.item.name)
const existingItem = cartCtx.items.findIndex((cartItem) => cartItem.name === props.item.name);
const addItemToCart=(event)=>{  
    event.preventDefault();  
    
    
        if(existingItem>=0){
            if(cartCtx.items[existingItem].quantity>0){
            cartCtx.items[existingItem].quantity -= 1
            cartCtx.items[existingItem].count+=1
        setQty(cartCtx.items[existingItem].quantity)
            } 
    }
   
}
return <Fragment>
        <h3>Quantity</h3>                
        <div className={classes.qty}>{qty!==0 ? qty : "No stock available"}</div>  
        <button onClick={addItemToCart}>
        + Add
        </button>
        </Fragment>

}

export default MedicineQuantityForm