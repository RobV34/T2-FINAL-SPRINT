import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Store from "./components/store/Store";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]); // This is the state that will be shared between components

  const handleAddToCart = (item) => { // This function will be passed to Store
    setCartItems((prevItems) => [...prevItems, item]); // Add item to cartItems
  };

  const handleRemoveFromCart = (index) => { // This function will be passed to Cart
    const updatedCartItems = cartItems.filter((item, itemIndex) => itemIndex !== index); // Remove item at index from cartItems
    setCartItems(updatedCartItems); // Update cartItems
  };

  const handleEmptyCart = () => { // This function will be passed to Cart
    setCartItems([]); // Empty cartItems
  };

  return (
    <Router>
      < Header cartItems={cartItems} />
      
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

      <Footer />
    </Router>
  );
}

export default App;

