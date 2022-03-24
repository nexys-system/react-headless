import React from 'react';

import LoadDataAsync from '../components/load-data-async';
import View from '../components/view';

const delay = (ms: number = 500) =>
  new Promise(resolve => setTimeout(resolve, ms));

interface Data {
  firstName: string;
  lastName: string;
}
const data: Data = { firstName: 'John', lastName: 'Doe' };

const getData = async () => {
  await delay();
  return data;
};

const UI = ({ data }: { data: Data }) => (
  <View<Data>
    data={data}
    structure={[
      { label: 'First Name', value: 'firstName' },
      { label: 'Last Name', value: 'lastName' }
    ]}
  />
);

export default () => {
  return (
    <>
      <h1>Load Data async</h1>

      <LoadDataAsync getData={getData} Component={UI} />
    </>
  );
};
