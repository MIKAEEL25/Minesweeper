import type { JSX } from 'react';
import mineIcon from '@/assets/mine.svg';
import falgIcon from '@/assets/red-flag.svg';
import type { CellProps } from './Types';
import { textColor } from '@/utils/textColor';

const Cell = ({
  cell,
  leftClickHandler,
  rowIndex,
  cellIndex,
}: CellProps): JSX.Element => {

  return (
    <div
      className={`
        cell ${typeof cell.value === 'number' ? textColor(cell.value) : ''}
      `}
      onClick={() => leftClickHandler(rowIndex, cellIndex)}
    >
      {cell.value === 'mine' && <img src={mineIcon} alt="mine" />}
       {typeof cell.value === "number" && <>{cell.value || ""}</>}
      {!cell.isOpened && (
        <div className="overlay">
          <img
            src={falgIcon}
            alt="flag"
            className={`${cell.isFlagged ? 'block' : 'hidden'}`}
          />
        </div>
      )}
    </div>
  );
};

export default Cell;
