import type { GameCell, MainBoard } from '@/components/Board/Types';
import { DIRECTIONS } from './DIRECTIONS';

export function creatBoard(cols: number, rows: number): MainBoard {
  const board: MainBoard = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    board[rowIndex] = [];
    for (let cellIndex = 0; cellIndex < cols; cellIndex++) {
      board[rowIndex][cellIndex] = {
        value: 0,
        isFlagged: false,
        isOpened: false,
      };
    }
  }
  return board;
}

export function boardWithMines(
  emptyBoard: MainBoard,
  cols: number,
  rows: number,
  totalMines: number
): MainBoard {
  let mines = 0;

  while (mines < totalMines) {
    const randomRow = Math.floor(Math.random() * rows);
    const randomCol = Math.floor(Math.random() * cols);
    if (emptyBoard[randomRow][randomCol].value !== 'mine') {
      (emptyBoard[randomRow][randomCol] as GameCell).value = 'mine';
      mines++;
    }
  }
  return emptyBoard;
}

export function boardWithNumbers(board: MainBoard): MainBoard {
  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell.value !== 'mine') {
        let minesAround = 0;

        DIRECTIONS.forEach(([differentRow, differentCol]) => {
          const newRow = rowIndex + differentRow;
          const newCol = colIndex + differentCol;

          if (newRow in board && newCol in board[newRow]) {
            if (board[newRow][newCol].value === 'mine') {
              minesAround++;
            }
          }
        });

        cell.value = minesAround;
      }
    });
  });

  return board;
}
