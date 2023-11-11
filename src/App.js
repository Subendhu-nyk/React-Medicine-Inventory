import { Fragment, useState } from 'react';
import './App.css';
import Header from './Component/Layout/Header';
import Medicine from './Component/Medicines/Medicine';
import Cart from './Component/Cart/Cart';


function App() {
  const [cartIsShown,setCartIsShown]= useState(false)
  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }

  return (
    <Fragment>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
      <Medicine/>      
    </main>
    </Fragment>

  );
}

export default App;
