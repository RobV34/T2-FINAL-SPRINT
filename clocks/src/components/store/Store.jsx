import React, { useState } from 'react'; // Import useState
import useClocks from './useClocks'; // Import the custom hook
import imageUrls from './imageData'; // Import the image data
import Slideshow from './Slideshow'; // Import the Slideshow component
import './Store.css';
 
function Store({ onAddToCart }) { // Pass onAddToCart as a prop
  const {
    clocks,
    selectedModel,
    selectedSize,
    selectedColor,
    updateSelectedModel,
    updateSelectedSize,
    updateSelectedColor,
    getPrice
  } = useClocks(); // Call the custom hook
 
  const handleModelChange = (e) => {
    updateSelectedModel(e.target.value);
  };
 
  const handleSizeChange = (e) => {
    updateSelectedSize(e.target.value);
  };
 
  const handleColorChange = (e) => {
    updateSelectedColor(e.target.value);
  };
 
  const [itemAdded, setItemAdded] = useState(false); // Add state to track if item was added to cart
 
  const addItemToCart = () => {
    const model = clocks.find(clock => clock.id === selectedModel);
    const itemToAdd = {
      id: selectedModel,
      modelName: model.name,
      size: selectedSize,
      color: selectedColor,
      price: getPrice() // Use getPrice to get the price
    };
    onAddToCart(itemToAdd);
    setItemAdded(true); // Set itemAdded to true when item is added to cart
    setTimeout(() => setItemAdded(false), 2000); // Reset itemAdded to false after 2 seconds
  };
 
  return (
    <div className="store-container">
      <h1>Build Your Own Clock</h1>

      <Slideshow images={imageUrls} />
    
      <div className="model-selector">
        <label>Choose a model:</label>
        <select value={selectedModel} onChange={handleModelChange}>
          {clocks.map(clock => (
            <option key={clock.id} value={clock.id}>{clock.name}</option>
          ))}
        </select>
      </div>
      <div className="size-selector">
        <label>Choose a size:</label>
        <select value={selectedSize} onChange={handleSizeChange}>
          {clocks.find(clock => clock.id === selectedModel)?.sizes.map(size => (
            <option key={size.size} value={size.size}>{size.size}</option>
          ))}
        </select>
      </div>
      <div className="color-selector">
        <label>Choose a color:</label>
        <select value={selectedColor} onChange={handleColorChange}>
          {clocks.find(clock => clock.id === selectedModel)?.colors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div className="price-display">
        Price: ${getPrice()}
      </div>
      {itemAdded && <div className="cart-notification">Item added to cart!</div>}
      <button className="buy-button" onClick={addItemToCart}>Add to Cart</button>
    </div>
  );
}
 
export default Store;