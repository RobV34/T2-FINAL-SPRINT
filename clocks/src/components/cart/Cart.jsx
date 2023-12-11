

import React, { useState } from 'react';
import './Cart.css'; // Ensure you have the styles set up for your cart and form

function Cart({ cartItems, onRemoveFromCart, onEmptyCart }) {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Add state to track order completion
const [orderStatus, setOrderStatus] = useState({
  isComplete: false,
  progress: 0,
  showProgressBar: false,
});

const processOrder = () => {
  // Here you would normally handle the order processing logic
  // For simulation, we'll just use a timeout
  setOrderStatus({ ...orderStatus, showProgressBar: true }); // Show progress bar when order starts
  
  const interval = setInterval(() => {
    setOrderStatus((prevState) => {
      if (prevState.progress >= 100) {
        clearInterval(interval);
        // Order is complete, we can now hide the progress bar and reset
        setTimeout(() => {
          setOrderStatus({ isComplete: false, progress: 0, showProgressBar: false });
        }, 2000); // Hide progress bar after 2 seconds
        return { ...prevState, isComplete: true };
      }
      return { ...prevState, progress: prevState.progress + 20 };
    });
  }, 1000); // Increment progress every 1 second
};




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer Information:', customer);
    processOrder();
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.modelName} - {item.size} / {item.color} - ${item.price}
                <button onClick={() => onRemoveFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="totals">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (15%): ${tax.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
          </div>
          <button onClick={onEmptyCart}>Empty Cart</button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={customer.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <textarea
              name="address"
              value={customer.address}
              onChange={handleInputChange}
              placeholder="Shipping Address"
              required
            />
            <button type="submit">Checkout</button>
          </form>
          <div className="progress-bar-container ">
            {orderStatus.isComplete ? (
              <p>Order Complete!</p>
            ) : (
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${orderStatus.progress}%` }}
                ></div>
              </div>
            )}
        </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;

