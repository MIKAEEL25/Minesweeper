import mineIcon from '@/assets/mine.svg';
import falgIcon from '@/assets/red-flag.svg';
import type { GameCell } from './Types';

const Cell: React.FC<{ cell: GameCell }> = ({ cell }) => {
  return (
    <span
      className={`cell text-${
        typeof cell.value === 'number' ? 'rose-500' : undefined
      }`}
    >
      {typeof cell.value === 'number' ? cell.value || cell.value > 0 : ''}
      {cell.value === 'mine' && <img src={mineIcon} alt="mine" />}
      {!cell.isOpened && (
        <div className="overlay">
          <div className={`${cell.isFlagged ? 'visible' : 'invisible'}`}>
            <img src={falgIcon} alt="flag" />
          </div>
        </div>
      )}
    </span>
  );
};

export default Cell;
