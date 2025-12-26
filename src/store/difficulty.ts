import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { difficultyConfig } from './difficulty.config';
import type { Difficulties } from './difficulty.config';
import type { DifficultyState } from './Types';

const initialdifficultyState: DifficultyState = {
  config: difficultyConfig.easy,
};

const difficultySlice = createSlice({
  name: 'difficulty',
  initialState: initialdifficultyState,
  reducers: {
    setDifficulty(state, action: PayloadAction<Difficulties>) {
      state.config = difficultyConfig[action.payload];
    },
  },
});

export const difficultyActions = difficultySlice.actions;

export default difficultySlice.reducer;
