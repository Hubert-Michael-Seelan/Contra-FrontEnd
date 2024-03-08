// import React, { useContext, useEffect } from 'react'
import "./CSS/OC.css"
// import { ShopContext } from '../Context/ShopContext';

const OrderConfirmed = () => {
  // const {removeFromCart} = useContext(ShopContext);

  // useEffect(() => {
  //   removeFromCart([])
  // },[])
  
  return (
    <div className='OC'>
      <h1>Your Order is Confirmed</h1>
      <h4>Thanks for Purchasing our Product</h4>
    </div>
  )
}

export default OrderConfirmed