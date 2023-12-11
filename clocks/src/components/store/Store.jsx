

import React, { useState, useEffect } from 'react';
import clocks from './clocks.json'; // Assuming JSON is in the same directory
import './Store.css';

function Store({ onAddToCart}) {
  const [selectedModel, setSelectedModel] = useState(clocks[0].id);
  const [selectedSize, setSelectedSize] = useState(clocks[0].sizes[0].size);
  const [selectedColor, setSelectedColor] = useState(clocks[0].colors[0]); // New state for color

  useEffect(() => {
    // This can be used to fetch data if clocks were loaded from an API
  }, []);

  const handleModelChange = (e) => {
    const newModel = e.target.value;
    setSelectedModel(newModel);
    // Reset size and color to the first option when model changes
    const model = clocks.find(clock => clock.id === newModel);
    setSelectedSize(model.sizes[0].size);
    setSelectedColor(model.colors[0]);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const getPrice = () => {
    const model = clocks.find(clock => clock.id === selectedModel);
    const size = model.sizes.find(s => s.size === selectedSize);
    return size.price;
  };

  const addItemToCart = () => { // This function constructs the cart item and calls onAddToCart
    const model = clocks.find(clock => clock.id === selectedModel);
    const itemToAdd = {
      id: selectedModel,
      modelName: model.name,
      size: selectedSize,
      color: selectedColor,
      price: getPrice()
    };
    onAddToCart(itemToAdd);
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
