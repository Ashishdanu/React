import { useEffect, useState, useRef } from 'react';

const Timer = () => { // Removed the '0 =>' from the function declaration
  const [count, setCount] = useState(0);
  const timer = useRef(null);

  useEffect(() => { // Removed the '0 =>' from the useEffect hook
    timer.current = setInterval(() => { // Corrected 'setlnterval' to 'setInterval'
      setCount((prev) => prev + 1);
    }, 1000);
    return () => { // Removed the '0 =>' from the return function
      clearInterval(timer.current);
      timer.current = null;
    };
  }, []);

  const stopCounter = () => { // Removed the '0 =>' from the function declaration
    clearInterval(timer.current);
    timer.current = null;
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={stopCounter}>Stop Counter</button>
    </div>
  );
};

export default Timer;