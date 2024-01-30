import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input placeholder='Your Mail Id' type='email'/>
        <button>
            Subscribe
        </button>
      </div>
    </div>
  )
}

export default NewsLetter