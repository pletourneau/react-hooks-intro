import React from "react";
import useTimer from "./useTimer";

function Timer() {
  const [isActive, timer, setIsActive, setTimer] = useTimer();
  return (
    <React.Fragment>
      {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped {timer}</h1>}
      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>

      <button
        onClick={() => {
          setTimer(0);
          setIsActive(false);
        }}
      >
        restart
      </button>
    </React.Fragment>
  );
}

export default Timer;
