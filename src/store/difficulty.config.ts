export const difficultyConfig = {
  easy: {
    time: 1800,
    row: 9,
    col: 9,
    mines: 20,
  },
  medium: {
    time: 1200,
    row: 16,
    col: 16,
    mines: 60,
  },
  hard: {
    time: 600,
    row: 16,
    col: 30,
    mines: 150,
  },
} as const;

export type Difficulties = keyof typeof difficultyConfig;
