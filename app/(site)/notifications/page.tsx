import { MobileNotificationsHeader } from "@/components/notifications/mobile-notifications-header";
import { NotificationsTabs } from "@/components/notifications/notifications-tabs";

const NotificationsPage = () => {
  return (
    <div>
      <MobileNotificationsHeader />
      <NotificationsTabs />
    </div>
  );
};

export default NotificationsPage;
