import React from "react";

import { ToastProp } from "../../../lib/context-provider/notification/type";

const ToastUnit = ({
  idx,
  title,
  timestring,
  content,
  onDismiss,
}: ToastProp & { idx: number; onDismiss: (idx: number) => void }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{ opacity: 1 }}
    >
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <strong className="flex-grow">{title}</strong>
        <small className="text-gray-500">{timestring}</small>
        <button
          type="button"
          className="ml-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
          onClick={() => onDismiss(idx)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="p-3">{content}</div>
    </div>
  );
};

export default ToastUnit;
