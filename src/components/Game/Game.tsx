import type { JSX } from 'react';
import Board from '../Board/Board';
import Panel from '../Panel/Panel';
import { useGame } from '@/hooks/useGame';

const Game = (): JSX.Element => {
  const { game , leftClickHandler } = useGame();
  return (
    <div className="h-fit mt-12 p-5 flex justify-center gap-5">
      <Board game={game} leftClickHandler={leftClickHandler} />
      <Panel />
    </div>
  );
};

export default Game;
