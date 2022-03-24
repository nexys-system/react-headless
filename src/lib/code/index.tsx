import React from 'react';

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

export const Block = ({ code }: { code: string }) => <code>{code}</code>;

export const Statement =
  (Block: (p: CodeBlockProps) => JSX.Element) =>
  ({
    code,
    copyToClipboard = false
  }: {
    code: string;
    copyToClipboard?: boolean;
  }): JSX.Element => {
    const [copyState, setCopyState] = React.useState<CopyState>(CopyState.idle);

    const handleClick = async () => {
      setCopyState(CopyState.progress);
      await navigator.clipboard.writeText(code);
      setCopyState(CopyState.copied);
    };

    return (
      <Block
        handleClick={handleClick}
        code={code}
        copyState={copyState}
        copyToClipboard={copyToClipboard}
      />
    );
  };
