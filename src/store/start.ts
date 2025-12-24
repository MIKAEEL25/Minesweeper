import { createSlice } from '@reduxjs/toolkit';
import type { GameStart } from './Types';

const initialgameState: GameStart = { isStart: false };

const startSlice = createSlice({
  name: 'gameState',
  initialState: initialgameState,
  reducers: {
    startGame(state) {
      state.isStart = true;
    },
    finishGame(state) {
      state.isStart = false;
    },
  },
});

export const startActions = startSlice.actions;

export default startSlice.reducer;
