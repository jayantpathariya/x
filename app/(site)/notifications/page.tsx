import { MobileNotificationsHeader } from "@/components/notifications/mobile-notifications-header";
import { NotificationsTabs } from "@/components/notifications/notifications-tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications",
};

const NotificationsPage = () => {
  return (
    <div>
      <MobileNotificationsHeader />
      <NotificationsTabs />
    </div>
  );
};

export default NotificationsPage;
