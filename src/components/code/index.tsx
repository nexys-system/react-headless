import React from 'react';
import {
  Statement as StatementGeneric,
  CopyState,
  CodeBlockProps
} from '../../lib/code';

const Block = ({
  code,
  copyState,
  copyToClipboard,
  handleClick
}: CodeBlockProps) => {
  const className: string =
    'cursor-pointer rounded p-1 pb-1 px-3 text-sm text-gray-300 hover:text-white ' +
    (copyState === CopyState.progress ? 'bg-yellow-500' : 'bg-black');

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
          className={'btn btn-sm'}
        >
          {copyState !== CopyState.copied && <span>Copy</span>}

          {copyState === CopyState.copied && <span>Copied</span>}
        </button>
      )}
    </span>
  );
};

export const Statement = StatementGeneric(Block);
