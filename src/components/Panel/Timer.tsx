import { type JSX, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startActions } from '@/store/start';
import Button from '../Button';
import type { RootState } from '@/store/index';

const Timer = (): JSX.Element => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const level = useSelector((state: RootState) => state.rootReducer.difficulty.config);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= level.time) {
          setIsRunning(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning , level.time]);

  const startHandler = () => {
    if (seconds >= level.time) {
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
      {seconds === level.time && <p>Time Is Up!</p>}
      {seconds !== level.time && (
        <Button
          className="hover:text-red-500 text-yellow-500"
          onClick={startHandler}
          disabled={isRunning}
        >
          Start
        </Button>
      )}
      <h1 className="text-white">⏰{formatTime(seconds)}</h1>
      <Button className="hover:text-red-500 text-yellow-500" onClick={resetHandler}>
        Reset
      </Button>
    </div>
  );
};

export default Timer;
