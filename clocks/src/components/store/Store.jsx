import React, { useState, useEffect } from 'react';
import clocks from './clocks.json'; // Assuming JSON is in the same directory
import './Store.css';

function Store({ onAddToCart}) {
  const [selectedModel, setSelectedModel] = useState(clocks[0].id); // New state for model
  const [selectedSize, setSelectedSize] = useState(clocks[0].sizes[0].size); // New state for size
  const [selectedColor, setSelectedColor] = useState(clocks[0].colors[0]); // New state for color

  useEffect(() => {
    // Update selectedSize when selectedModel changes
  }, []);

  const handleModelChange = (e) => { // This function updates the selectedModel state
    const newModel = e.target.value; // Get the new model from the event
    setSelectedModel(newModel); // Update selectedModel state
    // Reset size and color to the first option when model changes
    const model = clocks.find(clock => clock.id === newModel); // Find the new model
    setSelectedSize(model.sizes[0].size); // Set the size to the first option
    setSelectedColor(model.colors[0]); // Set the color to the first option
  };

  const handleSizeChange = (e) => { // This function updates the selectedSize state
    setSelectedSize(e.target.value); // Update selectedSize state
  };

  const handleColorChange = (e) => { // This function updates the selectedColor state
    setSelectedColor(e.target.value); // Update selectedColor state
  };

  const getPrice = () => { // This function returns the price of the selected clock
    const model = clocks.find(clock => clock.id === selectedModel); // Find the selected model
    const size = model.sizes.find(s => s.size === selectedSize); // Find the selected size
    return size.price; // Return the price of the selected size
  };

  const addItemToCart = () => { // This function constructs the cart item and calls onAddToCart
    const model = clocks.find(clock => clock.id === selectedModel);
    const itemToAdd = {
      id: selectedModel,
      modelName: model.name,
      size: selectedSize,
      color: selectedColor,
      price: getPrice() // Use getPrice to get the price
    };
    onAddToCart(itemToAdd); // Call onAddToCart with the new item
  };

  return (
    <div className="store-container">
      <h1>Build Your Own Clock</h1>
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
          {clocks.find(clock => clock.id === selectedModel).sizes.map(size => (
            <option key={size.size} value={size.size}>{size.size}</option>
          ))}
        </select>
      </div>
      <div className="color-selector">
        <label>Choose a color:</label>
        <select value={selectedColor} onChange={handleColorChange}>
          {clocks.find(clock => clock.id === selectedModel).colors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div className="price-display">
        Price: ${getPrice()}
      </div>
      <button className="buy-button" onClick={addItemToCart}>Add to Cart</button>
    </div>
  );
}

export default Store;



  
