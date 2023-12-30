import React, { useContext, useState,useEffect } from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart=(props)=>{
    const cartCtx=useContext(CartContext)
   const [total,setTotal]=useState(0)   
console.log(cartCtx,"cartCtx cart")

useEffect(() => {
  const mergedItems = cartCtx.items.reduce((accumulator, item) => {
    const existingItem = accumulator.find((mergedItem) => mergedItem.name === item.name);

    if (existingItem) {        
      existingItem.quantity += item.quantity;

    } else {        
      accumulator.push({ ...item });
    }

    return accumulator;
  }, []);

  let sum = mergedItems.reduce((accumulator, item) => {
    return accumulator + (item.price * item.count);
  }, 0);
  setTotal(sum);
}, [cartCtx.items]);




    const cartItemRemoveHandler=id=>{
      const itemToRemove = cartCtx.items.find((item) => item.id === id);
      const existingItem = cartCtx.items.findIndex((cartItem) => cartItem.id === id);
      console.log("existing id",existingItem)
  if (itemToRemove) {
    // Decrease the quantity by 1 (if it's greater than 0)
    if (itemToRemove.count > 0) {
      itemToRemove.count -= 1;
      cartCtx.items[existingItem].quantity += 1
      setTotal((prevTotal) => prevTotal - itemToRemove.price);
    }


  }

    }
    console.log("cartCtx out cartitem",cartCtx.items)
    const cartItemAddHandler=id=>{
      const itemToAdd = cartCtx.items.find((item) => item.id === id);
      const existingItem = cartCtx.items.findIndex((cartItem) => cartItem.id === id);
  if (itemToAdd) {
    // Decrease the quantity by 1 (if it's greater than 0)
    if (itemToAdd) {
      itemToAdd.count =(itemToAdd.count) +1;
      cartCtx.items[existingItem].quantity -= 1
      setTotal((prevTotal) => prevTotal + Number(itemToAdd.price));
      console.log("cartCtx inside cartitem",cartCtx.items)
    }
  }
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
             <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} quantity={item.count} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item.id)}/>
            // <li>Item Name:{item.name} Quantity:{item.quantity}</li>
          ))}
        </ul>
      );
      let totalAmount= `$${total}`
      const medicineDetails = cartCtx.items.map((item, index) => {
        let price=parseInt(item.price)
        return {
            name:item.name,
            price:price,
            quantity:item.count,
            total:price*item.count
        };
    });
    console.log("medicine details for post",medicineDetails)

    const orderHandler=()=>{
      medicineDetails.forEach((medicine) => {
      fetch('https://medicine-3d3dd-default-rtdb.firebaseio.com/medicine.json',{
        method:'POST',
        body:JSON.stringify(medicine),
        headers:{
          'Content-Type':'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send data');
        }
        return response.json();
    })
    .then(data => {
      console.log('Successfully added expense:', data);
      cartCtx.clearCart();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while saving the expense.');
  });
});
    }
      

    return(
        <Modal onClose={props.onClose}>
            {cartItems}
        <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button} onClick={orderHandler}>Order</button>
    </div>
    </Modal>
    )

}

export default Cart