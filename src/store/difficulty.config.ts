export const difficultyConfig = {
  easy: {
    time: 1800,
    multiplier: 1,
  },
  medium: {
    time: 1200,
    multiplier: 2,
  },
  hard: {
    time: 600,
    multiplier: 3,
  },
} as const;

export type Difficulties = keyof typeof difficultyConfig;
