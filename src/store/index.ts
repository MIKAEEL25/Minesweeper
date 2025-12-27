import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gameReducer from './start';
import gameDifficulty from './difficulty';

const rootReducer = combineReducers({
  game: gameReducer,
  difficulty : gameDifficulty,
});

const store = configureStore({
  reducer: { rootReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
