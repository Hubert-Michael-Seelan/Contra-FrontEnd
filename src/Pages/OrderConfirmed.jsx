// import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import "./CSS/OC.css"
// import { ShopContext } from '../Context/ShopContext';

const OrderConfirmed = () => {
  // const {getTotalCartItems} = useContext(ShopContext);

  // useEffect(() => {
  //   getTotalCartItems([])
  // },[])
  const navigate = useNavigate();
  const goBack = () => navigate("/")
  return (
    <div className='OC'>
      <h1>Your Order is Confirmed</h1>
      <h4>Thanks for Purchasing our Product</h4>
      <button onClick={goBack}>Back to HomePage</button>
    </div>
  )
}

export default OrderConfirmed