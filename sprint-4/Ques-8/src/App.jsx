// src/components/App.js

import React from 'react';
import useToggleItems from './ToggleHook/ToggleItems';

const App = () => {
  // Using the custom hook with "A", "B", "C" and an initial position of 2 (i.e., "C")
  const [currentItem, toggleItem] = useToggleItems(['A', 'B', 'C'], 1);

  return (
    <div>
      <h1>Current Item: {currentItem}</h1>
      <button onClick={toggleItem}>Toggle Item</button>
    </div>
  );
};

export default App;

