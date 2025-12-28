export interface GameStart {
  play: boolean;
  isOver: boolean;
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
