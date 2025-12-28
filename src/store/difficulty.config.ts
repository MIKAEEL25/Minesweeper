export const difficultyConfig = {
  easy: {
    time: 900,
    row: 9,
    col: 9,
    mines: 20,
  },
  medium: {
    time: 600,
    row: 16,
    col: 16,
    mines: 80,
  },
  hard: {
    time: 300,
    row: 16,
    col: 30,
    mines: 200,
  },
} as const;

export type Difficulties = keyof typeof difficultyConfig;
