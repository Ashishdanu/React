import { useState, useEffect } from 'react';

function DocumentTitleUpdater() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    document.title = 'Initial';
  }, []); // runs only on mount
  
  useEffect(() => {
    //ye update krega title jab humn update krenge kuch 
    document.title =  count === 0 ? 'initial' : `Updtd ${count}`  ;
  }, [count]); // runs on mount and update when count changes

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <strong>Dont see this count see above in the title there title is changing its count </strong>
      <button id="titlebtn" onClick={handleIncrement}>Update title by +1</button>
    </div>
  );
}

export default DocumentTitleUpdater;