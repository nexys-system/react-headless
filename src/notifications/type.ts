export interface ToastProp {
  title?: string;
  timestring: string;
  content: string;
}

export enum NotificationType {
  banner,
  toast
}

export interface Notification {
  text: string;
  type: NotificationType;
}
