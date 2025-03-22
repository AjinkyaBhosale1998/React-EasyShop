import { useState } from 'react'
import './App.css'
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);
  
  const addtocart = (product) => {
    setCart((prevCart) => {
      const itemsExists = prevCart.find((item) => item.id === product.id);
      if (itemsExists) {
        return prevCart.map((item) => item.id=== product.id ? {...item, quantity: item.quantity + 1} : item);
      
    }else{
      return [...prevCart, {...product, quantity:1}];
    }})
  }

  const updateQantity  = (id, amount) => {
    setCart((prevCart) => prevCart.map((item)=> item.id === id ? { ...item, quantity:Math.max(1, item.quantity + amount)} : item)
    .filter((item) => item.quantity > 0) 
  );
  }

   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

   const freeGiftApplied = total >= 1000;
  const PRODUCTS = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Smartphone", price: 300 },
    { id: 3, name: "Headphones", price: 100 },
    { id: 4, name: "Smartwatch", price: 150 },
  ];
  

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
     <Cart cart={cart} updateQantity={updateQantity} total={total} freeGiftApplied={freeGiftApplied}/>
    </>
  )
}

export default App
