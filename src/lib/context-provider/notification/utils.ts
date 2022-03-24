import { MessageType } from './type';

export const mapTypeToTitle = (t: MessageType): string => {
  switch (t) {
    case MessageType.success:
      return 'Success!';
    case MessageType.warning:
      return 'Warning!';
    case MessageType.error:
      return 'Error!';
    case MessageType.info:
      return 'Info';
  }
};

export const mapTypeToColor = (t: MessageType): string => {
  switch (t) {
    case MessageType.success:
      return 'green';
    case MessageType.warning:
      return 'yellow';
    case MessageType.error:
      return 'rose';
    case MessageType.info:
      return 'sky';
  }
};
