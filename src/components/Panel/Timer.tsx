import { type JSX, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { startActions } from '@/store/start';
import Button from '../Button';

const Timer = (): JSX.Element => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= 3600) {
          setIsRunning(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startHandler = () => {
    if (seconds >= 3600) {
      return;
    }
    setIsRunning(true);
    dispatch(startActions.startGame());
  };

  const resetHandler = () => {
    setIsRunning(false);
    setSeconds(0);
    dispatch(startActions.finishGame());
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
    <div className="flex justify-between mt-10">
      {seconds === 3600 && <p>Time Is Up!</p>}
      {seconds !== 3600 && (
        <Button
          className="hover:text-red-500"
          onClick={startHandler}
          disabled={isRunning}
        >
          Start
        </Button>
      )}
      <h1 className="text-white">⏰{formatTime(seconds)}</h1>
      <Button className="hover:text-red-500" onClick={resetHandler}>
        Reset
      </Button>
    </div>
  );
};

export default Timer;
