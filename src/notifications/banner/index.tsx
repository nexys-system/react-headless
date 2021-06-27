import React from 'react';
import * as Ctx from '../context';

import { NotificationType } from '../type';

interface Banner {
  text: string;
}

const Banner = () => {
  const { notifications, rmNotification } = Ctx.useToastContext();

  const banners: Banner[] = notifications
    .filter(x => x.type === NotificationType.banner)
    .map(x => {
      return { text: x.text };
    });

  return (
    <div className="container">
      {banners.map((banner, i) => (
        <div className="alert alert-primary  alert-dismissible">
          {banner.text}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => rmNotification(i)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Banner;
