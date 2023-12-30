import React from "react";

const CartContext=React.createContext({
    items:[],
    totalAount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    clearCart:()=>{},
    PurchasedItems:[],
    addPurchasedItems:item=>{} 
})

export default CartContext