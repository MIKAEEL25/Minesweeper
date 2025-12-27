import { createSlice } from '@reduxjs/toolkit';
import type { GameStart } from './Types';

const initialgameState: GameStart = {
  isStart: false,
  isOver: false,
  win: false,
  lose: false,
};

const gameSlice = createSlice({
  name: 'gameState',
  initialState: initialgameState,
  reducers: {
    startGame(state) {
      state.isStart = true;
    },
    finishGame(state) {
      state.isOver = true;
    },
    winGame(state) {
      state.win = true;
    },
    looseGame(state) {
      state.lose = true;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
