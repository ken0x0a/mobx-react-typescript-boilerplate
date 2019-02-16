import * as React from "react";
import { Notification, notificationState } from "../components/notification";

export interface NotificationPageProps {}

export class NotificationPage extends React.Component<
  NotificationPageProps,
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
