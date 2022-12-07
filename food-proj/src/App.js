
import './App.css';
import React, { useEffect } from 'react';
import {useDispatch ,useSelector } from 'react-redux'
import getAllPizzas from './actions/pizzaAction'
import Header from './components/HEADER/Header';
import Meals  from './components/MEAL-ITEMS/Meals';
import Cart from './components/CART/Cart';


import CartProvider from './store/CartProvider';
import { useState } from 'react';
import SignIn from './components/signup/signIn';


function App() {
  
  const dispatch=useDispatch();
 const pizzas=useSelector((state)=>state)

 
  useEffect(()=>{
    dispatch(getAllPizzas())
    console.log(pizzas);

  },[]);

  
  const [cartIsShown,setCartIsShown]=useState(true);


  const showCartHandler=()=>{
    setCartIsShown(true);

  }
  const HideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
<CartProvider>
  <SignIn/>
  {cartIsShown && <Cart onClose={HideCartHandler}/>}
<Header onShowCart={showCartHandler}/>
<Meals/>
</CartProvider>
  );
}

export default App;
