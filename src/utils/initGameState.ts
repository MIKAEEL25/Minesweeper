import { creatBoard, boardWithMines, boardWithNumbers } from './index';

export function initialBoard(cols: number, rows: number, totalMines: number) {
  const emptyBoard = creatBoard(rows, cols);
  const boardWithPlacedMines = boardWithMines(
    emptyBoard,
    rows,
    cols,
    totalMines
  );
  const gameBoard = boardWithNumbers(boardWithPlacedMines);
  return gameBoard;
}
