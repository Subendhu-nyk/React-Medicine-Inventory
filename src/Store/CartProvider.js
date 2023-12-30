import { useContext, useState } from "react";
import CartContext from "./CartContext";

const CartProvider=props=>{
    
    const [items,updateItems]=useState([]) 
    const [purchasedItems,setPurchasedItems]=useState([])

    const addItemToCartHandler=item=>{  
        // console.log("item in addItemToCartHandler>>>>",item)      
        // updatedItems(prevItems => [...prevItems, item])      

        const existingItem = items.findIndex((cartItem) => cartItem.name === item.name);

        if (existingItem!==-1) {
            const updatedItems = [...items];           
            updatedItems[existingItem].quantity=Number(updatedItems[existingItem].quantity) -1;
          // console.log("existing item inside",existingItem)
          //   console.log("updatedItems",updatedItems)
          updateItems(updatedItems);
        } else {
          updateItems([...items, item]);
        }
        
    }
    const removeItemFromCartHandler=id=>{

    }
    const clearCartHandler=()=>{
      updateItems([])
    }
    const addPurchasedItemsHandler=item=>{  
      console.log("item in addItemToCartHandler>>>>",item)      
      setPurchasedItems([...items, item]) 
    }   
    const cartContext={
        items:items,
        totalAmount:0,
        // count:modifyCount
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
        clearCart:clearCartHandler,
        purchasedItems:purchasedItems,
        addPurchasedItems:addPurchasedItemsHandler
    }
    return<CartContext.Provider value={cartContext}>
           {/* {console.log("inside CartContext.provider",cartContext)} */}
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;