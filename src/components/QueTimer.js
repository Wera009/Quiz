import { useEffect, useState } from "react";

export default function QueTimer({ onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(10000);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeOut();
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={10000}
      value={remainingTime}
      className={mode}
    />
  );
}
