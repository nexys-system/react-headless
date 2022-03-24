import React from "../../_snowpack/pkg/react.js";
import * as Ctx from "../../lib/context-provider/notification/context.js";
import {NotificationType} from "../../lib/context-provider/notification/type.js";
const Banner = () => {
  const {notifications, rmNotification} = Ctx.useToastContext();
  const banners = notifications.filter((x) => x.type === NotificationType.banner).map((x) => {
    return {text: x.text};
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, banners.map((banner, i) => /* @__PURE__ */ React.createElement("div", {
    className: "alert alert-primary  alert-dismissible"
  }, banner.text, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close",
    onClick: () => rmNotification(i)
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, "×")))));
};
export default Banner;
