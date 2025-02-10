import { NotificationDetail } from "../NotificationDetail";

export interface DisplayNotificationProps
{
    notificationDetail : NotificationDetail | undefined;
    handleCloseNotification: () => void;
}