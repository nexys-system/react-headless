import React from "../../../_snowpack/pkg/react.js";
import ToastUnit from "./unit.js";
import * as Ctx from "../../../lib/context-provider/notification/context.js";
import {
  MessageType,
  NotificationType
} from "../../../lib/context-provider/notification/type.js";
const Toast = () => {
  const {notifications, rmNotification} = Ctx.useToastContext();
  const toasts = notifications.filter((x) => x.type === NotificationType.toast).map((x) => {
    return {
      title: "nexys",
      content: x.text,
      timestring: "sdf",
      messageType: MessageType.info
    };
  });
  return /* @__PURE__ */ React.createElement("div", {
    "aria-live": "polite",
    "aria-atomic": "true",
    style: {position: "relative", minHeight: "200px"}
  }, /* @__PURE__ */ React.createElement("div", {
    style: {position: "absolute", top: 0, left: 10}
  }, toasts.map((t, i) => /* @__PURE__ */ React.createElement(ToastUnit, {
    key: i,
    idx: i,
    onDismiss: rmNotification,
    ...t
  }))));
};
export default Toast;
