import React from 'react';
import Ctx from './context';

import { Notification } from './type';

export const Provider =
  (Banner: () => JSX.Element, Toast: () => JSX.Element) =>
  ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [notifications, setNotificationsInner] = React.useState<
      Notification[]
    >([]);

    const rmNotification = (idx: number) => {
      const ts = notifications.filter((_x, j) => j !== idx);
      setNotifications([...ts]);
    };

    const setNotification = (t: Notification) => {
      setNotifications([...notifications, t]);
    };

    const setNotifications = (t: Notification[]) => {
      setNotificationsInner([...t]);
    };

    return (
      <Ctx.Provider
        value={{
          setNotification,
          setNotifications,
          rmNotification,
          notifications
        }}
      >
        <Banner />
        {children}
        <Toast />
      </Ctx.Provider>
    );
  };

export default Provider;
