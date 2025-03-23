import React from 'react'
import './Cart.css'

const Cart = ({ cart, updateQantity, total, freeGiftApplied }) => {
    return (
        <>
            {/* <h2 style={{ textAlign: 'left' }}>Cart Summary</h2> */}
            <div className='cart'>
                {cart.length === 0 ? (
                    <>
                    <h3>🎁 Free Gift Available for orders above ₹1000!</h3>
                        <h3>Your cart is empty</h3>
                        <h4>Add some items to see them here</h4>
                    </>
                ) : (
                    <>
                        <h2 style={{ textAlign: 'left' }}>Cart Items</h2>
                        {cart.map((item) => (
                            <div key={item.id} className='cart-item'>
                                <h4 >{item.name} - ₹{item.price} x {item.quantity}</h4 >
                                {item.id !== 99 && (
                                    <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                                        <button className='increase' onClick={() => updateQantity(item.id, 1)}>+</button>
                                        <h4 >{item.quantity}</h4>
                                        <button className='decrease' onClick={() => updateQantity(item.id, -1)}>-</button>
                                    </div>
                                )}
                            </div>
                        ))}
                        <h3 style={{ textAlign: 'right' }}>Subtotal: ₹{total}</h3>
                        {/* <hr /> */}
                        {freeGiftApplied && <h2 className='gift'>🎁 Free Gift Applied!</h2>}
                    </>
                )}
            </div>
        </>
    );
};

export default Cart