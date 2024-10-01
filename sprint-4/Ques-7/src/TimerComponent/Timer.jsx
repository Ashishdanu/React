// File: src/components/TimerComponent.js
import React from "react";
import useTimer from "../TimerHook/Timer";

const TimerComponent = () => {
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>
        <span>Agya ni Ohi Billo Time</span> {time}
      </h1>
      <strong style={{ color: isRunning ? 'green' : 'red' }}>

            status - -

  {isRunning ? 'Running' : 'Not Running'}
</strong>

      <button onClick={startTimer}> startTimer</button><br />
      <button onClick= {stopTimer}>stopTimer</button><br />
      <button onClick={resetTimer}>resetTimer</button>
    </div>
  );
};

export default TimerComponent;
