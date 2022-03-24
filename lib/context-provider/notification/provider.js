import React from "../../../_snowpack/pkg/react.js";
import Ctx from "./context.js";
export const Provider = (Banner, Toast) => ({children}) => {
  const [notifications, setNotificationsInner] = React.useState([]);
  const rmNotification = (idx) => {
    const ts = notifications.filter((_x, j) => j !== idx);
    setNotifications([...ts]);
  };
  const setNotification = (t) => {
    setNotifications([...notifications, t]);
  };
  const setNotifications = (t) => {
    setNotificationsInner([...t]);
  };
  return /* @__PURE__ */ React.createElement(Ctx.Provider, {
    value: {
      setNotification,
      setNotifications,
      rmNotification,
      notifications
    }
  }, /* @__PURE__ */ React.createElement(Banner, null), children, /* @__PURE__ */ React.createElement(Toast, null));
};
export default Provider;
