import { useState, useEffect } from "react";

function useTimer() {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((timerState) => timerState + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  // New line below!

  return [isActive, timer, setIsActive, setTimer];
}

export default useTimer;
