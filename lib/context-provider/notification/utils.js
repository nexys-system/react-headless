import {MessageType} from "./type.js";
export const mapTypeToTitle = (t) => {
  switch (t) {
    case MessageType.success:
      return "Success!";
    case MessageType.warning:
      return "Warning!";
    case MessageType.error:
      return "Error!";
    case MessageType.info:
      return "Info";
  }
};
export const mapTypeToColor = (t) => {
  switch (t) {
    case MessageType.success:
      return "green";
    case MessageType.warning:
      return "yellow";
    case MessageType.error:
      return "rose";
    case MessageType.info:
      return "sky";
  }
};
