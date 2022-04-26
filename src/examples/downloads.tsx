import React from 'react';
import { saveByteArray } from '../lib/utils';

const downloadTxt = () => {
  saveByteArray('hello world', 'out.txt');
};

const downloadCsv = () => {
  const csv = [
    ['col 1', 'col 2', 'col 3'],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const csvString = csv.map(row => row.join(',')).join('\n');

  saveByteArray(csvString, 'out.csv', 'text/csv');
};

export default () => {
  return (
    <>
      <h1>Download</h1>

      <ul>
        <li>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={downloadTxt}
          >
            Download txt
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={downloadCsv}
          >
            Download CSV
          </button>
        </li>
      </ul>
    </>
  );
};
