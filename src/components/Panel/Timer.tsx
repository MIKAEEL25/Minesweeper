import { type JSX, useEffect, useState } from 'react';

const Timer = (): JSX.Element => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= 3600) {
          setIsRunning(false);
          return prev;
        }
        return prev + 3600;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startHandler = () => {
    if (seconds >= 3600) {
      return;
    }
    setIsRunning(true);
  };

  const resetHandler = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (totalSeconds: number) => {
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds % 3600) / 60);
    const second = totalSeconds % 60;

    return `${hour.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex justify-between">
      {seconds === 3600 && <p>Time Is Up!</p>}
      {seconds !== 3600 && (
        <button
          className="hover:text-red-500"
          onClick={startHandler}
          disabled={isRunning}
        >
          Start
        </button>
      )}
      <h2 className='text-white'>⏰{formatTime(seconds)}</h2>
      <button className="hover:text-red-500" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
