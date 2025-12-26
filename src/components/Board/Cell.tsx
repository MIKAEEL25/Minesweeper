import mineIcon from '@/assets/mine.svg';
import falgIcon from '@/assets/red-flag.svg';

interface CellProps {
  value: number | string;
  isOpened?: boolean;
  isFlagged?: boolean;
}

const Cell: React.FC<{ cell: CellProps }> = ({ cell }) => {
  return (
    <span
      className={`cell text-${
        typeof cell.value === 'number' ? 'rose-500' : undefined
      }`}
    >
      {typeof cell.value === 'number' ? cell.value : ''}
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
