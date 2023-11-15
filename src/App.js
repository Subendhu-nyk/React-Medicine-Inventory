import { useState } from 'react';
import './App.css';
import Header from './Component/Layout/Header';
import Medicine from './Component/Medicines/Medicine';
import Cart from './Component/Cart/Cart';
import CartProvider from './Store/CartProvider';


function App() {
  const [cartIsShown,setCartIsShown]= useState(false)
  
  const showCartHandler=()=>{
    setCartIsShown(true)

  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
      <Medicine/>      
    </main>
    </CartProvider>

  );
}

export default App;
