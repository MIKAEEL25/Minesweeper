import { useSelector } from 'react-redux';

import { type JSX } from 'react';
import type { CellProps } from './Types';
import type { RootState } from '@/store';
import mineIcon from '@/assets/mine.svg';
import falgIcon from '@/assets/red-flag.svg';
import { textColor } from '@/utils/textColor';

const Cell = ({
  cell,
  leftClickHandler,
  rowIndex,
  cellIndex,
  rightClickHandler,
}: CellProps): JSX.Element => {
  const play = useSelector(
    (state: RootState) => state.rootReducer.game.play
  );
  return (
    <div
      className={`
        cell ${typeof cell.value === 'number' ? textColor(cell.value) : ''}
        ${cell.value === 'mine' && cell.highlight}
        ${!play && 'pointer-events-none'}
      `}
      onClick={() => leftClickHandler(rowIndex, cellIndex)}
      onContextMenu={(event) => rightClickHandler(event, rowIndex, cellIndex)}
    >
      {cell.value === 'mine' && <img src={mineIcon} alt="mine" />}
      {typeof cell.value === 'number' && <>{cell.value || ''}</>}
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
