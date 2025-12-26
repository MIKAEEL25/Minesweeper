export interface GameStart {
  isStart: boolean;
}

export type LevelConfig = {
  time: number;
  multiplier: number;
};
export type DifficultyState = {
  config : LevelConfig;
}
