import { useState } from 'react';
import { initialBoard } from '@/utils/index';
import type { MainBoard } from '@/components/Board/Types';
import { showEmptyCells } from '@/utils';

export const useGame = () => {
  const [game, setGame] = useState(initialBoard(9, 9, 10));

  function cloneBoard(board: MainBoard) {
    return structuredClone(board);
  }

  function openedCell(board: MainBoard, row: number, col: number) {
    const newGameBoard = cloneBoard(board);
    const cell = newGameBoard[row][col];
    const mineCell = cell.value === 'mine';
    const numberCell = typeof cell.value === 'number' && cell.value > 0;
    const emptyCell = typeof cell.value === 'number' && cell.value === 0;

    if (mineCell) {
      console.log('mine');
    }
    if (!mineCell) {
      cell.isOpened = true;
      if (numberCell) {
        console.log('number');
      }
      if (emptyCell) {
        showEmptyCells(newGameBoard, 9, 9, row, col);
        console.log('empty');
      }
    }
    return newGameBoard;
  }

  function leftClickHandler(row: number, col: number) {
    const newGameBoard = cloneBoard(game);
    const openingCell = openedCell(newGameBoard, row, col);
    if (openingCell) {
      setGame(openingCell);
    }
  }

  return { game, leftClickHandler };
};
