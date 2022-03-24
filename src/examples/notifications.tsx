import React, { useContext } from 'react';

import Toast from '../components/notifications/toast';
import Banner from '../components/notifications/banner';

import * as N from '../lib/context-provider/notification';
import {
  MessageType,
  NotificationType
} from '../lib/context-provider/notification/type';

const Provider = N.Provider(Banner, Toast);

const Inner = () => {
  const { setNotification } = N.Context.useToastContext();

  const toast: N.Type.Notification = {
    messageType: MessageType.info,
    text: 'my toast',
    type: NotificationType.toast
  };

  const banner: N.Type.Notification = {
    messageType: MessageType.info,
    text: 'my banner',
    type: NotificationType.banner
  };

  return (
    <div style={{ height: '100%' }}>
      <h1>
        Notifications <small>with provider</small>
      </h1>

      <button
        className="btn btn-primary"
        onClick={() => setNotification(banner)}
      >
        show banner
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => setNotification(toast)}
      >
        show toast
      </button>
    </div>
  );
};

export default () => (
  <Provider>
    <Inner />
  </Provider>
);
