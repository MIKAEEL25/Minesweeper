import { creatBoard, boardWithMines, boardWithNumbers } from './index';

export const initialBoard = (
  cols: number,
  rows: number,
  totalMines: number
) => {
  const emptyBoard = creatBoard(cols, rows);
  const boardWithPlacedMines = boardWithMines(
    emptyBoard,
    cols,
    rows,
    totalMines
  );
  const gameBoard = boardWithNumbers(boardWithPlacedMines);
  return gameBoard;
};
