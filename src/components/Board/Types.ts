import type { MouseEvent } from 'react';

type OpenedCell = {
  isOpened: true;
  isFlagged: false;
};

type ClosedCell = {
  isOpened: false;
  isFlagged: boolean;
};

type MineCell = {
  value: 'mine';
  highlight?: 'bg-red-500' | 'bg-green-500';
};

type NumberCell = {
  value: number;
};

export type OpenedMineCell = OpenedCell & MineCell;
type ClosedMineCell = ClosedCell & MineCell;
export type OpenedNumberCell = OpenedCell & NumberCell;
type ClosedNumberCell = ClosedCell & NumberCell;

type EmptyCell = {
  value: null;
  isFlagged: false;
  isOpened: false;
};

export type GameCell =
  | OpenedMineCell
  | ClosedMineCell
  | OpenedNumberCell
  | ClosedNumberCell
  | EmptyCell;

export type MainBoard = GameCell[][];

export type BoardProps = {
  game: MainBoard;
  leftClickHandler: (col: number, row: number) => void;
  rightClickHandler: (
    e: MouseEvent<HTMLDivElement>,
    col: number,
    row: number
  ) => void;
};
export type CellProps = {
  cell: GameCell;
  rowIndex: number;
  cellIndex: number;
  leftClickHandler: (col: number, row: number) => void;
  rightClickHandler: (
    e: MouseEvent<HTMLDivElement>,
    col: number,
    row: number
  ) => void;
};
