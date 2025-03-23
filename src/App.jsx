import { useEffect, useState } from 'react'
import './App.css'
import Cart from './Cart';
import ProgressBar from './ProgressBar';

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
];

function App() {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [progress, setProgress] = useState(0);
  const [freeGiftApplied, setfFreeGiftApplied] = useState(false);

  useEffect(() => {
    let newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);

    setProgress(Math.min((newTotal / 1000) * 100, 100));
    console.log("hii");

    console.log("newTotal", newTotal);

    console.log("freeGiftApplied", freeGiftApplied);
    const hasFreeGift = cart.some((item) => item.id === 99);
    if (newTotal >= 1000 && !hasFreeGift) {
      setCart((prevCart) => [...prevCart, { id: 99, name: "Wireless Mouse Free Gift", price: 0, quantity: 1 }]);
      setfFreeGiftApplied(true);
    } 
    else if (newTotal < 1000 && hasFreeGift) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== 99));
      setfFreeGiftApplied(false);
    }
  }, [cart]);

  const addtocart = (product) => {
    setCart((prevCart) => {
      const itemsExists = prevCart.find((item) => item.id === product.id);
      if (itemsExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQantity = (productId, change) => {
    setCart((prevCart) => prevCart.map((item) => item.id === productId ? { ...item, quantity: Math.max(item.quantity + change, 0) } : item)
      .filter((item) => item.quantity > 0 || item.id === 99)
    );
  };

  //  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  //  const freeGiftApplied = total >= 1000;

  return (
    <>
      <h2 >Shopping Cart</h2>
      <h2 style={{ textAlign: 'left' }}>Products</h2>
      <div className='card-container'>
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            <div className='card'>
              <h4>{product.name}</h4>
              <h4>Price: ₹{product.price}</h4>
              <button className='addtocart' onClick={() => addtocart(product)}>Add To Cart</button>
            </div>
          </div>
        ))}

      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 >Cart Summary</h2>
        <h3 >Subtotal: ₹{total}</h3>
      </div>

      <ProgressBar progress={progress} />
      {total >= 1000 && (
        <p className="gift-message">
          🎁 {freeGiftApplied ? "Free Gift Applied!" : "Free Gift Available for orders above ₹1000!"}
        </p>
      )}
      <Cart cart={cart} updateQantity={updateQantity} total={total} freeGiftApplied={freeGiftApplied} />
    </>
  )
}

export default App
