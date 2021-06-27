import React from 'react';

import ToastUnit from './unit';
import * as Ctx from '../context';
import { NotificationType, ToastProp } from '../type';

const Toast = () => {
  const { notifications, rmNotification } = Ctx.useToastContext();

  const toasts: ToastProp[] = notifications
    .filter(x => x.type === NotificationType.toast)
    .map(x => {
      return { title: 'nexys', content: x.text, timestring: 'sdf' };
    });

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{ position: 'relative', minHeight: '200px' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 10 }}>
        {toasts.map((t, i) => (
          <ToastUnit key={i} idx={i} onDismiss={rmNotification} {...t} />
        ))}
      </div>
    </div>
  );
};

export default Toast;
