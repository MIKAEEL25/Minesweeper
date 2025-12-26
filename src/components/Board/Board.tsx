import type { JSX } from 'react';
import type { RootState } from '@/store';
import { useSelector } from 'react-redux';
import Cell from './Cell';

const DUMMY_CELLS = [
  [{ value: 1 }, { value: 2 }, { value: 3, isOpened: true, isFlagged: true }],
  [{ value: 4 }, { value: 'mine' }, { value: 6 }],
  [{ value: 7 }, { value: 'mine' }, { value: 'mine' }],
];

const Board = (): JSX.Element => {
  const isStart = useSelector(
    (state: RootState) => state.rootReducer.game.isStart
  );

  return (
    <div className="w-2/3 h-fit border-2 border-red-500 p-5 bg-blue-950 rounded-2xl text-primary text-3xl">
      {/* {!isStart && 'Please Start The Game'} */}
      {!isStart && (
        <>
          {DUMMY_CELLS.map((row) => (
            <div className="flex bg-white w-fit">
              {row.map((cell) => (
                <Cell cell={cell} />
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Board;
