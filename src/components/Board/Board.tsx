import type { JSX } from 'react';
import type { RootState } from '@/store';
import { useSelector } from 'react-redux';

import Cell from './Cell';
import type { BoardProps } from './Types';


const Board = (props: BoardProps): JSX.Element => {
  const { game } = props;
  const isStart = useSelector(
    (state: RootState) => state.rootReducer.game.isStart
  );

  return (
    <div className="w-2/3 h-fit border-2 border-red-500 p-5 bg-blue-950 rounded-2xl text-primary text-3xl">
      {/* {!isStart && 'Please Start The Game'} */}
      {!isStart && (
        <>
          {game.map((row) => (
            <div className="flex bg-white w-fit m-auto">
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
