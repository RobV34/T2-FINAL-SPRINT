import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Store from "./components/store/Store";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]); // This is the state that will be shared between components

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = cartItems.filter((item, itemIndex) => itemIndex !== index);
    setCartItems(updatedCartItems);
  };

  const handleEmptyCart = () => {
    setCartItems([]);
  };




  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Pass handleAddToCart as a prop to Store */}
        <Route path="/store" element={<Store onAddToCart={handleAddToCart} />} />
        <Route path="/contact" element={<Contact />} />
        {/* Pass cartItems as a prop to Cart */}
        {/* Pass setCartItems as a prop to Cart */}
        <Route path="/cart" element={<Cart 
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onEmptyCart={handleEmptyCart}/>} />
      </Routes>
    </Router>
  );
}

export default App;

