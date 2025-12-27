import { useState } from 'react';

import { checkGameWin, initialBoard, showAllMines } from '@/utils/index';
import type { MainBoard } from '@/components/Board/Types';
import { showEmptyCells } from '@/utils';
import { useDispatch } from 'react-redux';
import { gameActions } from '@/store/start';

export const useGame = () => {
  const [game, setGame] = useState(initialBoard(9, 9, 10));
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWin, setGameWin] = useState<boolean>(false);
  const gameEnded = gameOver || gameWin;
  const dispatch = useDispatch();

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
      dispatch(gameActions.finishGame());
      dispatch(gameActions.looseGame());
      setGameOver(true);
      cell.highlight = 'bg-red-500';
      showAllMines(newGameBoard);
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
      if (checkGameWin(newGameBoard, 10)) {
        dispatch(gameActions.finishGame());
        dispatch(gameActions.winGame());
        setGameWin(true);
        showAllMines(newGameBoard, true);
      }
    }
    return newGameBoard;
  }

  function leftClickHandler(row: number, col: number) {
    if (
      gameEnded || 
      game[row][col].isOpened ||
      game[row][col].isFlagged
    ) {
      return null
    }
    const newGameBoard = cloneBoard(game);
    const openingCell = openedCell(newGameBoard, row, col);
    if (openingCell) {
      setGame(openingCell);
    }
  }

  return { game, leftClickHandler };
};
