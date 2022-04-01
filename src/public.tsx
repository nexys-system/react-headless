import React from 'react';

import { ghUrl } from './config';

import * as Code from './components/code';

const badges = [
  [
    'https://badge.fury.io/js/%40nexys%2Fheadless.svg',
    'https://www.npmjs.com/package/@nexys/headless'
  ],
  [
    'https://img.shields.io/npm/v/@nexys/headless.svg',
    'https://www.npmjs.com/package/@nexys/headless'
  ],
  [
    'https://github.com/nexys-system/react-headless/actions/workflows/publish.yml/badge.svg',
    'https://github.com/nexys-system/react-headless/actions/workflows/publish.yml'
  ],
  [
    'https://github.com/nexys-system/react-headless/actions/workflows/deploy.yml/badge.svg',
    'https://github.com/nexys-system/react-headless/actions/workflows/deploy.yml'
  ]
];

export default (): JSX.Element => (
  <div>
    <h1>React Headless Components</h1>

    <h3>Get Started</h3>

    <Code.Statement code={'yarn add @nexys/headless'} copyToClipboard={true} />

    <h3>Resources</h3>


    <p>
      <a href={ghUrl}>Source</a> available under MIT license.
    </p>

    <ul className={'flex items-stretch '}>
      {badges.map((badge, i) => (
        <li key={i} className={'p-1'}>
          <img src={badge[0]} />
        </li>
      ))}
    </ul>
  </div>
);
