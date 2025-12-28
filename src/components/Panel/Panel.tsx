import Timer from './Timer';
import Difficulty from './Difficulty';
import Mines from './Mines';

const Panel: React.FC<{ minesLeft: number }> = ({ minesLeft }) => {
  return (
    <div className="w-1/3 h-fit text-primary text-3xl border-2 border-orange-500 bg-sky-900 p-5 rounded-2xl">
      <Difficulty />
      <Timer />
      <Mines minesLeft={minesLeft} />
    </div>
  );
};

export default Panel;
