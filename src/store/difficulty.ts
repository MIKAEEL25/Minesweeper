import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Difficulties } from './Types';

const initialdifficultyState: Difficulties = { level: 'easy' };

const difficultySlice = createSlice({
  name: 'difficulty',
  initialState: initialdifficultyState,
  reducers: {
    setDifficulty(state, action: PayloadAction<Difficulties['level']>) {
      state.level = action.payload;
    },
  },
});

export const difficultyActions = difficultySlice.actions;

export default difficultySlice.reducer;
