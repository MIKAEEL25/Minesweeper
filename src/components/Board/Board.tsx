import type { JSX } from 'react';
import type { RootState } from '@/store';
import { useSelector } from 'react-redux';

const Board = (): JSX.Element => {
  const isStart = useSelector(
    (state: RootState) => state.rootReducer.game.isStart
  );
  return (
    <div className="w-2/3 h-fit border-2 border-red-500 p-5 bg-stone-900 rounded-2xl text-primary text-3xl">
      {isStart ? <p>Started</p> : 'Please Start The Game'}
    </div>
  );
};

export default Board;
