import type { JSX } from 'react';
import Board from '../Board/Board';
import Panel from '../Panel/Panel';
import { useGame } from '@/hooks/useGame';

const Game = (): JSX.Element => {
  const { game } = useGame();
  return (
    <div className="h-fit mt-20 p-10 flex justify-center gap-10">
      <Board game={game} />
      <Panel />
    </div>
  );
};

export default Game;
