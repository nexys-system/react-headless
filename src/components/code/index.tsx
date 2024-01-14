import React from "react";
import {
  Statement as StatementGeneric,
  CopyState,
  CodeBlockProps,
} from "../../lib/code";

const Block = ({
  code,
  copyState,
  copyToClipboard,
  handleClick,
}: CodeBlockProps) => {
  const className: string =
    "cursor-pointer rounded p-1 pb-1 px-3 text-sm text-gray-300 hover:text-white " +
    (copyState === CopyState.progress ? "bg-yellow-500" : "bg-gray-600");

  return (
    <span
      onClick={copyToClipboard ? handleClick : undefined}
      className={className}
    >
      <code>
        {code}
        &nbsp;
      </code>

      {copyToClipboard && (
        <button
          disabled={copyState === CopyState.progress}
          className={`text-xs px-2 py-1 rounded ${
            copyState === CopyState.copied ? "bg-green-500" : "bg-blue-500"
          } hover:bg-blue-600 disabled:opacity-50`}
        >
          {copyState !== CopyState.copied && <span>Copy</span>}
          {copyState === CopyState.copied && <span>Copied</span>}
        </button>
      )}
    </span>
  );
};

export const Statement = StatementGeneric(Block);
