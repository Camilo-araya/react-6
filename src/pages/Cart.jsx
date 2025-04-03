import React from 'react';
import '../assets/style/Cart.css';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, updateQuantity, removeFromCart, calculateTotal } = useCart();

  const increaseQuantity = (pizzaId) => {
    const pizza = cart.find((item) => item.id === pizzaId);
    updateQuantity(pizzaId, pizza.quantity + 1);
  };

  const decreaseQuantity = (pizzaId) => {
    const pizza = cart.find((item) => item.id === pizzaId);
    if (pizza.quantity > 1) {
      updateQuantity(pizzaId, pizza.quantity - 1);
    } else {
      removeFromCart(pizzaId);
    }
  };

  if (!cart) {
    return <p>El carrito está vacío</p>; 
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Detalles del pedido:</h2>
      <div className="cart-items">
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="pizza-imageN" />
            <div className="pizza-name">{pizza.name}</div>
            <div className="pizza-price">${pizza.price}</div>
            <button
              onClick={() => decreaseQuantity(pizza.id)}
              className="quantity-button decrease"
            >
              -
            </button>
            <div className="quantity-display">{pizza.quantity}</div>
            <button
              onClick={() => increaseQuantity(pizza.id)}
              className="quantity-button increase"
            >
              +
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">Total: ${calculateTotal()}</div>
      <button className="pay-button">Pagar</button>
    </div>
  );
}

export default Cart;