import React from 'react';

export enum ActionState {
  idle,
  loading,
  success,
  failed
}

export interface BtnProps {
  disabled?: boolean;
  onClick: () => void | Promise<void>;
  children: JSX.Element | JSX.Element[];
}

const ApplyActionButton =
  (Btn: (props: BtnProps) => JSX.Element) =>
  <A,>({
    label,
    asyncAction,
    LoadingContent,
    SuccessContent,
    FailedContent
  }: {
    label: string | JSX.Element;
    asyncAction: () => Promise<A>;
    LoadingContent: () => JSX.Element;
    SuccessContent: (p: { data?: A }) => JSX.Element;
    FailedContent: () => JSX.Element;
  }) => {
    const [state, setState] = React.useState<ActionState>(ActionState.idle);
    const [data, setData] = React.useState<A | undefined>(undefined);

    const handleClick = async () => {
      setState(ActionState.loading);
      try {
        const r = await asyncAction();
        setData(r);
        setState(ActionState.success);
        return;
      } catch (err) {
        setState(ActionState.failed);
        return;
      }
    };
    return (
      <Btn disabled={state === ActionState.loading} onClick={handleClick}>
        <>
          {state === ActionState.idle && label}
          {state === ActionState.loading && <LoadingContent />}
          {state === ActionState.success && <SuccessContent data={data} />}
          {state === ActionState.failed && <FailedContent />}
        </>
      </Btn>
    );
  };

export default ApplyActionButton;
