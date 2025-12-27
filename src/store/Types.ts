export interface GameStart {
  isStart: boolean;
  isOver: boolean;
  win: boolean;
  lose: boolean;
}

export type LevelConfig = {
  time: number;
  row: number;
  col: number;
  mines: number;
};
export type DifficultyState = {
  config: LevelConfig;
};
