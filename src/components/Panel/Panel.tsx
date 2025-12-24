import type { JSX } from 'react';
import Timer from './Timer';
import Difficulty from './Difficulty';

const Panel = (): JSX.Element => {
  return (
    <div className="w-1/3 h-fit text-primary text-3xl border-2 border-orange-500 bg-stone-900 p-5 rounded-2xl">
      <Difficulty />
      <Timer />
    </div>
  );
};

export default Panel;
