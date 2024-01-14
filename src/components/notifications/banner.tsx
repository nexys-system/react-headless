import React from "react";
import * as Ctx from "../../lib/context-provider/notification/context";
import { NotificationType } from "../../lib/context-provider/notification/type";

interface Banner {
  text: string;
}

const Banner = () => {
  const { notifications, rmNotification } = Ctx.useToastContext();

  const banners: Banner[] = notifications
    .filter((x) => x.type === NotificationType.banner)
    .map((x) => {
      return { text: x.text };
    });

  return (
    <div className="container mx-auto px-4">
      {banners.map((banner, i) => (
        <div className="bg-blue-500 text-white p-4 rounded flex justify-between items-center mb-4">
          {banner.text}
          <button
            type="button"
            className="text-2xl"
            aria-label="Close"
            onClick={() => rmNotification(i)}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default Banner;
