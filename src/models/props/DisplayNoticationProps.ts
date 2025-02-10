import { NotificationDetail } from "../NotificationDetail";

export interface DisplayNotificationProps
{
    notificationDetail : NotificationDetail;
    handleCloseNotification: () => void;
}