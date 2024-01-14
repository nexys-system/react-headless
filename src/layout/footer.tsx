import React from "react";
import { github, version } from "../config";

export default () => (
  <footer>
    <div className="container mx-auto px-4">
      <p className="text-sm">
        <a href={github.version} className="text-blue-600 hover:text-blue-800">
          {version}
        </a>
      </p>
    </div>
  </footer>
);
