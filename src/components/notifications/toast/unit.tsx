import React from 'react';

import { ToastProp } from '../../../lib/context-provider/notification/type';

const ToastUnit = ({
  idx,
  title,
  timestring,
  content,
  onDismiss
}: ToastProp & { idx: number; onDismiss: (idx: number) => void }) => {
  return (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{ opacity: 1 }}
    >
      <div className="toast-header">
        <strong className="mr-auto">{title}</strong>
        <small className="text-muted">{timestring}</small>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
          onClick={() => onDismiss(idx)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">{content}</div>
    </div>
  );
};

export default ToastUnit;
