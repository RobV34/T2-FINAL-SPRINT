

import { useState, useEffect } from 'react';
import clocksData from './clocks.json'; // import your JSON data

function useClocks() {
  const [clocks, setClocks] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Fetch and initialize data
  useEffect(() => {
    setClocks(clocksData);
    if (clocksData.length > 0) {
      const firstClock = clocksData[0];
      setSelectedModel(firstClock.id);
      setSelectedSize(firstClock.sizes[0].size);
      setSelectedColor(firstClock.colors[0]);
    }
  }, []);

  // Handlers for updating state
  const updateSelectedModel = (modelId) => {
    const model = clocks.find(clock => clock.id === modelId);
    setSelectedModel(modelId);
    setSelectedSize(model?.sizes[0]?.size);
    setSelectedColor(model?.colors[0]);
  };

  const updateSelectedSize = (size) => {
    setSelectedSize(size);
  };

  const updateSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const getPrice = () => {
    const model = clocks.find(clock => clock.id === selectedModel);
    const size = model?.sizes.find(s => s.size === selectedSize);
    return size?.price || 0;
  };

  return {
    clocks,
    selectedModel,
    selectedSize,
    selectedColor,
    updateSelectedModel,
    updateSelectedSize,
    updateSelectedColor,
    getPrice
  };
}

export default useClocks;