import type { JSX } from 'react';

const Panel = (): JSX.Element => {
  return (
    <div className="w-1/3">
      <p className="text-primary text-3xl border-2 border-orange-500 bg-stone-900 p-5 rounded-2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        placeat quod molestiae atque labore facere quas, laboriosam unde magnam
        nisi?
      </p>
    </div>
  );
};

export default Panel;
