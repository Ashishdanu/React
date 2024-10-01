// src/hooks/useToggleItems.js

import { useState } from 'react';

const useToggleItems = (items = [], initialPosition = 0) => {
  // Set initial state based on the provided position or default to 0
  const [currentIndex, setCurrentIndex] = useState(initialPosition);

  // Function to toggle to the next item in the array
  const toggleState = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Return the current item and the toggle function
  return [items[currentIndex], toggleState];
};

export default useToggleItems;
