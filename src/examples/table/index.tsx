import React from 'react';

import CountryList from './country';
import SimpleList from './simple';
import SimpeListWithOuterFilter from './simple-with-outer-filter';

export default (): JSX.Element => (
  <>
    <SimpeListWithOuterFilter />
    {/*  <CountryList />
    <SimpleList />*/}
  </>
);
