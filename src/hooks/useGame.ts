import { useEffect, useState, type MouseEvent } from 'react';

import { checkGameWin, initialBoard, showAllMines } from '@/utils/index';
import type { MainBoard } from '@/components/Board/Types';
import { showEmptyCells } from '@/utils';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '@/store/start';
import type { RootState } from '@/store';

export const useGame = () => {
  const level = useSelector(
    (state: RootState) => state.rootReducer.difficulty.config
  );
  const [game, setGame] = useState(
    initialBoard(level.row, level.col, level.mines)
  );
  useEffect(() => {
    setGame(initialBoard(level.row, level.col, level.mines));
  }, [level]);

  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWin, setGameWin] = useState<boolean>(false);
  const [totalFlags, setTotalFlags] = useState<number>(0);
  const gameEnded = gameOver || gameWin;

  const dispatch = useDispatch();

  const minesLeft : number = level.mines - totalFlags;

  function cloneBoard(board: MainBoard) {
    return structuredClone(board);
  }

  function openedCell(board: MainBoard, row: number, col: number) {
    const newGameBoard = cloneBoard(board);
    const cell = newGameBoard[row][col];
    const mineCell = cell.value === 'mine';
    const emptyCell = typeof cell.value === 'number' && cell.value === 0;

    if (mineCell) {
      setGameOver(true);
      dispatch(gameActions.startGame(false));
      dispatch(gameActions.finishGame(true));
      cell.highlight = 'bg-red-500';
      showAllMines(newGameBoard);
    }
    if (!mineCell) {
      cell.isOpened = true;
      if (emptyCell) {
        showEmptyCells(newGameBoard, level.row, level.col, row, col);
      }
      if (checkGameWin(newGameBoard, level.mines)) {
        setGameWin(true);
        dispatch(gameActions.finishGame(true));
        showAllMines(newGameBoard, true);
      }
    }
    return newGameBoard;
  }

  function leftClickHandler(row: number, col: number) {
    if (gameEnded || game[row][col].isOpened || game[row][col].isFlagged) {
      return null;
    }
    const newGameBoard = cloneBoard(game);
    const openingCell = openedCell(newGameBoard, row, col);
    if (openingCell) {
      setGame(openingCell);
    }
  }
  function rightClickHandler(
    e: MouseEvent<HTMLDivElement>,
    row: number,
    col: number
  ) {
    e.preventDefault();

    if (gameEnded || game[row][col].isOpened) return;

    let flagsDifference = 0;

    setGame((prevGameBoard) => {
      const newGameBoard: MainBoard = cloneBoard(prevGameBoard);
      const cell = prevGameBoard[row][col];

      if (cell.isFlagged) {
        newGameBoard[row][col].isFlagged = false;
        if (!flagsDifference) flagsDifference--;
      }

      if (!cell.isFlagged) {
        newGameBoard[row][col].isFlagged = true;
        if (!flagsDifference) flagsDifference++;
      }

      if (checkGameWin(newGameBoard, level.mines)) {
        showAllMines(newGameBoard, true);
        setGameWin(true);
        dispatch(gameActions.finishGame(true));
      }
      return newGameBoard;
    });
    setTotalFlags((prevTotalFlags) =>  prevTotalFlags + flagsDifference);
  }

  return { game, leftClickHandler, rightClickHandler, minesLeft };
};
