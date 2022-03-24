export interface ToastProp {
  title?: string;
  timestring: string;
  content: string;
  messageType: MessageType;
}

export enum NotificationType {
  banner,
  toast
}

export enum MessageType {
  success,
  warning,
  error,
  info
}

export interface Notification {
  text: string;
  type: NotificationType;
  messageType: MessageType;
  isHtml?: boolean;
}
