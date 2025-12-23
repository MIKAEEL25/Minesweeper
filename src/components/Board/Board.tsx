import type { JSX } from 'react';


const Board = (): JSX.Element => {
  return (
    <div className="w-2/3 border-2 border-red-500 p-5 bg-stone-900 rounded-2xl">
      <p className="text-primary text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        maiores quo voluptatibus aspernatur esse reprehenderit voluptates
        mollitia nisi, repudiandae quisquam!
      </p>
    </div>
  );
};

export default Board;
