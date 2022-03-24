import React from 'react';
import { github, sha, version } from '../config';

export default () => (
  <footer>
    <div className="container">
      <p>
        <small>
          <a href={github.version}>{sha.slice(0, 15)}</a>
        </small>
      </p>
    </div>
  </footer>
);
