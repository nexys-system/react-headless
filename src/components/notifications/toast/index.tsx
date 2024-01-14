import React from "react";

import ToastUnit from "./unit";

import * as Ctx from "../../../lib/context-provider/notification/context";
import {
  MessageType,
  NotificationType,
  ToastProp,
} from "../../../lib/context-provider/notification/type";

const Toast = () => {
  const { notifications, rmNotification } = Ctx.useToastContext();

  const toasts: ToastProp[] = notifications
    .filter((x) => x.type === NotificationType.toast)
    .map((x) => {
      return {
        title: "nexys",
        content: x.text,
        timestring: "sdf",
        messageType: MessageType.info,
      };
    });

  return (
    <div className="relative min-h-[200px]">
      <div className="absolute top-0 left-2.5">
        {toasts.map((t, i) => (
          <ToastUnit key={i} idx={i} onDismiss={rmNotification} {...t} />
        ))}
      </div>
    </div>
  );
};

export default Toast;
