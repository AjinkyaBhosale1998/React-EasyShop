import { useState } from 'react'
import './App.css'
import Cart from './Cart';

function App() {

  const PRODUCTS = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Smartphone", price: 300 },
    { id: 3, name: "Headphones", price: 100 },
    { id: 4, name: "Smartwatch", price: 150 },
  ];
  const addtocart = (product) => {
    
    console.log("hi addtocart has been clicked ");
  };

  return (
    <>
      <h2>Shopping Cart</h2>
     <h4>Products</h4>
     <div className='card-container'>
      {PRODUCTS.map((product)=> (
        <div key={product.id}>
          <div className='card'>
          <h4>{product.name}</h4>
          <h4>${product.price}</h4>
          <button className='addtocart' onClick={()=> addtocart(product)}>Add To Cart</button>
          </div>
        </div>
      ))}
      
     </div>
     <Cart/>
    </>
  )
}

export default App
