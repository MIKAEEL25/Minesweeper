export interface GameStart {
  isStart: boolean;
  isOver: boolean;
  win: boolean;
  lose: boolean;
}

export type LevelConfig = {
  time: number;
  multiplier: number;
};
export type DifficultyState = {
  config: LevelConfig;
};
