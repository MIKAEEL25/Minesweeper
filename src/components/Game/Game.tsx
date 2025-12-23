import type { JSX } from 'react';
import Board from '../Board/Board';
import Panel from '../Panel/Panel';

const Game = (): JSX.Element => {
  return (
    <div className="h-fit w-fit mt-20 p-10 flex justify-center gap-10">
      <Board />
      <Panel />
    </div>
  );
};

export default Game;
