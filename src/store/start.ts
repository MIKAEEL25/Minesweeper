import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GameStart } from './Types';

const initialgameState: GameStart = {
  play: false,
  isOver: false,
};

const gameSlice = createSlice({
  name: 'gameState',
  initialState: initialgameState,
  reducers: {
    startGame(state, actions: PayloadAction<boolean>) {
      state.play = actions.payload;
    },
    finishGame(state, actions: PayloadAction<boolean>) {
      state.isOver = actions.payload;
    }
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
