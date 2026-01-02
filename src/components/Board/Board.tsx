import type { JSX } from 'react';

import Cell from './Cell';
import type { BoardProps } from './Types';

const Board = ({
  game,
  leftClickHandler,
  rightClickHandler,
}: BoardProps): JSX.Element => {
  return (
    <div className="w-fit h-fit border-2 m-auto border-red-500 p-5 bg-gray-800 rounded-2xl text-primary text-xl">
      {game.map((row, rowIndex) => (
        <div key={rowIndex} className="flex bg-gray-200 w-fit m-auto">
          {row.map((cell, cellIndex) => (
            <Cell
              cell={cell}
              rowIndex={rowIndex}
              cellIndex={cellIndex}
              leftClickHandler={leftClickHandler}
              rightClickHandler={rightClickHandler}
              key={cellIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
