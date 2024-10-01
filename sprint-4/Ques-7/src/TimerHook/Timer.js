import { useEffect, useRef, useState } from "react";

const useTimer = () => {
  const [time, setTimer] = useState(0);
  const intervalId = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  // set timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalId.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
  };

  // stop timer
  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalId.current);
      setIsRunning(false);
    }
  };

  //reset Timer
  const resetTimer = () => {
    clearInterval(intervalId.current);
    setTimer(0);
    isRunning(false);
  };

  //   i am adding a clealup useeffect
  // so what it willl do  when i close my app i prevent unexpected data leakes or uncecessary use of resources
  // bacisically what happens when we use unmount out data rget removeed from the  dom
  // so  now what happens in background there night be chances that timer can run to prevent that we use this unmounting clear timeout
  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  return { time, isRunning, startTimer, stopTimer, resetTimer };
};
export default useTimer;
