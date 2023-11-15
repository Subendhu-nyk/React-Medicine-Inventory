import React, { useContext, useState,useEffect } from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContext";

const HeaderCartButton=(props)=>{   
//     const [qty,setQty]=useState(0)
const cartCtx=useContext(CartContext)
    let quantity=0;
    cartCtx.items.forEach(item=>{
        quantity+=item.count
        console.log("qtyinner",quantity)
    })
 
    
    
    return(<button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{quantity}</span>
    </button>
    )
    }
    
    export default HeaderCartButton;