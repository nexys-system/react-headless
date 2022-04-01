// see https://github.com/nexys-system/tailwind-react-ui/blob/master/src/lib/business/snippet.tsx
import React from 'react';
import { truncateString } from './utils';

export enum CopyState {
  idle = 1,
  progress = 2,
  copied = 3
}

export interface CodeBlockProps {
  code: string;
  copyState: CopyState;
  copyToClipboard: boolean;
  handleClick: () => void;
}

export const Statement =
  (Block: (p: CodeBlockProps) => JSX.Element) =>
  ({
    code,
    copyToClipboard = false,
    truncate
  }: {
    code: string;
    copyToClipboard?: boolean;
    truncate?: number;
    toggleView?: boolean;
  }): JSX.Element => {
    //  const [truncateOverride, setTruncate] = React.useState<boolean>(false);
    const [copyState, setCopyState] = React.useState<CopyState>(CopyState.idle);

    const handleClick = async () => {
      setCopyState(CopyState.progress);
      await navigator.clipboard.writeText(code);
      setCopyState(CopyState.copied);
    };

    const c: string =
      truncate === undefined ? code : truncateString(code, truncate); //truncateOverride === true ||

    return (
      <Block
        handleClick={handleClick}
        code={c}
        copyState={copyState}
        copyToClipboard={copyToClipboard}
      />
    );
  };
