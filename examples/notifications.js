import React from "../_snowpack/pkg/react.js";
import Toast from "../components/notifications/toast/index.js";
import Banner from "../components/notifications/banner.js";
import * as N from "../lib/context-provider/notification/index.js";
import {
  MessageType,
  NotificationType
} from "../lib/context-provider/notification/type.js";
const Provider = N.Provider(Banner, Toast);
const Inner = () => {
  const {setNotification} = N.Context.useToastContext();
  const toast = {
    messageType: MessageType.info,
    text: "my toast",
    type: NotificationType.toast
  };
  const banner = {
    messageType: MessageType.info,
    text: "my banner",
    type: NotificationType.banner
  };
  return /* @__PURE__ */ React.createElement("div", {
    style: {height: "100%"}
  }, /* @__PURE__ */ React.createElement("h1", null, "Notifications ", /* @__PURE__ */ React.createElement("small", null, "with provider")), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setNotification(banner)
  }, "show banner"), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => setNotification(toast)
  }, "show toast"));
};
export default () => /* @__PURE__ */ React.createElement(Provider, null, /* @__PURE__ */ React.createElement(Inner, null));
