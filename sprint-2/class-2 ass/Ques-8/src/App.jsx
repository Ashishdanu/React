import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

const Timer = () => {
  const [duration, setDuration] = useState(60); // Initial duration in seconds
  const [remainingTime, setRemainingTime] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const timerRef = useRef(null);

  // Start the timer
  const startTimer = () => {
    if (!isRunning) {
      timerRef.current = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            setShowNotification(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setIsRunning(true);
      setShowNotification(false);
    }
  };

  // Pause the timer
  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setRemainingTime(duration);
    setIsRunning(false);
    setShowNotification(false);
  };

  // Handle duration change
  const handleDurationChange = (e) => {
    const newDuration = Number(e.target.value);
    if (newDuration > 0) {
      setDuration(newDuration);
      setRemainingTime(newDuration);
    }
  };

  useEffect(() => {
    // Update the remaining time if the duration changes
    setRemainingTime(duration);
  }, [duration]);

  // Calculate the percentage of time remaining
  const progressPercentage = (remainingTime / duration) * 100;

  // Dynamic background color based on remaining time
  const backgroundColor = remainingTime < 10 ? "red" : "teal";

  return (
    <div style={{ backgroundColor, padding: "20px", borderRadius: "10px" }}>
      <h1>Timer</h1>
      <input
        type="number"
        min="1"
        value={duration}
        onChange={handleDurationChange}
        style={{ marginBottom: "10px" }}
      />
      <div style={{ marginBottom: "10px" }}>
        <h2>
          Time Remaining: {Math.floor(remainingTime / 60)}:
          {String(remainingTime % 60).padStart(2, "0")}
        </h2>
        <progress
          value={progressPercentage}
          max="100"
          style={{ width: "100%" }}
        />
      </div>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resetTimer}>
        Reset
      </button>
      {showNotification && <p>Time's up!</p>}
    </div>
  );
};

export default App;
