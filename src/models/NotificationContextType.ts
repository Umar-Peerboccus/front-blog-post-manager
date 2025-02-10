import { NotificationDetail } from "./NotificationDetail";

// Define the context type
export interface NotificationContextType {
    notification: NotificationDetail;
    showNotification: (message: string) => void;
    hideNotification: () => void;
  }