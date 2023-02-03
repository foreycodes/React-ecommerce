import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import  { CartItem }  from './cartItem';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom'; 
import './cart.css';
import HeroImage from '../../components/cart/heroimage'; 

export const Cart = () => {
  // testing cart
  const cartItems = PRODUCTS;
  // 
  const { getTotalCartAmount } = useContext(ShopContext); 
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
        <HeroImage />
        <h1 className="cart-title">YOUR CART</h1>
        <div className="line"></div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />; 
          }
        })}
        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <h1>Your Cart is Empty</h1>
        )}
      </div>
    </div>
  )
}
