import * as React from "react";
import {
  Notification,
  notificationState
} from "../components/notification-object";

export interface NotificationObjectPageProps {}

export class NotificationObjectPage extends React.Component<
  NotificationObjectPageProps,
  {}
> {
  public render() {
    return (
      <div>
        <Notification notificationState={notificationState} />
      </div>
    );
  }
}
