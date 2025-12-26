import { useState, type JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';

import type { Difficulties } from '@/store/difficulty.config';
import type { RootState } from '@/store';
import { difficultyActions } from '@/store/difficulty';

const Difficulty = (): JSX.Element => {
  const [acvtiveLevel, setActiveLevel] = useState<Difficulties[0]>('easy');

  const difficulties: Difficulties[] = ['easy', 'medium', 'hard'];

  const isStart = useSelector(
    (state: RootState) => state.rootReducer.game.isStart
  );

  const dispatch = useDispatch();

  function setDifficultyHandler(level: Difficulties): void {
    dispatch(difficultyActions.setDifficulty(level));
    setActiveLevel(level);
  }

  return (
    <div className="flex justify-evenly">
      {difficulties.map((level) => (
        <Button
          key={level}
          onClick={() => setDifficultyHandler(level)}
          className={`text-fuchsia-500 ${
            acvtiveLevel === level ? 'border-b-2 border-blue-500' : ''
          }`}
          disabled={isStart}
        >
          {level.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default Difficulty;
