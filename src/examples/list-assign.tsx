import React from 'react';

import { delay } from './utils';
import ListAssign from '../components/list-assign';

const dataIn = [
  { id: 1, assigned: false, name: 'Elephant' },
  { id: 2, assigned: true, name: 'Lion' }
];

export default () => {
  const [data, setData] = React.useState(dataIn);

  const onUpdate = async (id: number) => {
    await delay(500);
    const d = data.map(d => {
      if (d.id === id) {
        return { ...d, assigned: !d.assigned };
      }

      return d;
    });

    setData([...d]);
  };

  return <ListAssign<number> data={data} updatePromise={onUpdate} />;
};
