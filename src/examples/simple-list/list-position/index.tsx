import React from 'react';

import List from './list';

export default () => {
  const [data, setData] = React.useState<{ id: number; title: string }[]>([
    { id: 1, title: 'item #1' },
    { id: 2, title: 'item #2' },
    { id: 3, title: 'item #3' },
    { id: 4, title: 'item #4' },
    { id: 5, title: 'item #5' }
  ]);

  const handleMove = (id: number, move: -1 | 1) => {
    const elementIdx = data.findIndex(x => x.id === id);

    if (elementIdx < 0) {
      throw Error('element could not be found');
    }

    const newIdx = elementIdx + move;

    const element = data[elementIdx];

    data.splice(elementIdx, 1);
    data.splice(newIdx, 0, element);

    setData([...data]);
  };

  return (
    <>
      <h2>List Position</h2>
      <List data={data} onMove={handleMove} />
    </>
  );
};
