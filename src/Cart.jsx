import React from 'react'
import './Cart.css'

const Cart = ({cart, updateQantity, total, freeGiftApplied}) => {
    return (
        <div className='cart'>
            <h4>Cart Summary</h4>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className='cart-item'>
                            <span>{item.name} -${item.price}* {item.quantity}</span>
                            {item.id !== 99 && (
                                <div>
                                    <button className='increase' onClick={() => updateQantity(item.id, 1)}>+</button>
                                    <button className='decrease' onClick={() => updateQantity(item.id, -1)}>-</button>
                                </div>
                            )}
                        </div>
                    ))}
                    <h3>Subtotal: ${total}</h3>
                    {freeGiftApplied && <p className='gift'>🎁 Free Gift Applied !</p>}
                </>
            )}
        </div>

    )
}

export default Cart