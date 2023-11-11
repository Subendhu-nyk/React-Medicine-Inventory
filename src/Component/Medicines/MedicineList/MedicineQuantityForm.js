import React, { Fragment } from "react";
import classes from "./MedicineList.module.css"


const MedicineQuantityForm =props=>{    
console.log("props.quantity",props)
const addItemToCart=(event)=>{
    event.preventDefault();
    // console.log("cartCtx",cartCtx)    
   console.log("clicked")

}
return <Fragment>
        <h3>Quantity</h3>        
        <div className={classes.qty}>{props.item.quantity}</div>         
        <button onClick={addItemToCart}>
        + Add
        </button>
        </Fragment>

}

export default MedicineQuantityForm