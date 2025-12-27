import { useState } from 'react';
import { initialBoard } from '@/utils/initGameState';

export const useGame = () => {
  const [game] = useState(initialBoard(10, 10, 10));

  function leftClickHandler(col : number , row : number) {
    console.log('left click' , col , row);
  }


  return { game };
};
