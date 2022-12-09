
import './App.css';
import React, { useEffect,useState } from 'react';
import {useDispatch ,useSelector } from 'react-redux'
import getAllPizzas from './actions/pizzaAction'
import Header from './components/HEADER/Header';
import Meals  from './components/MEAL-ITEMS/Meals';
import Cart from './components/CART/Cart';


import CartProvider from './store/CartProvider';
import SignIn from './components/signup/signIn';
import { Auth } from './components/AUTH/Auth';


function App() {
  
  const dispatch=useDispatch();
  const user=useSelector((state)=>state?.AuthReducer?.authData);
  const [profile,setProfile]=useState(JSON.parse(localStorage.getItem('user')));

 
  useEffect(()=>{
    dispatch(getAllPizzas())
    if(!user)
    setProfile(null)
    setProfile(JSON.parse(localStorage.getItem('user')))
    console.log(user,profile)

  },[user,dispatch]);

  
  const [cartIsShown,setCartIsShown]=useState(true);


  const showCartHandler=()=>{
    setCartIsShown(true);

  }
  const HideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
<CartProvider>
  {/* <SignIn/> */}
  {/* {cartIsShown && <Cart onClose={HideCartHandler}/>} */}
<Header onShowCart={showCartHandler}/>
{
  (profile?.result)?<Meals/>:<Auth/>
}
  {/* <Auth/>
<Meals/> */}
</CartProvider>
  );
}

export default App;
