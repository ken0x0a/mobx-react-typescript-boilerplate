import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

type ID = string | number;
interface NotificationItem {
  title: string;
  message: string;
  onPress: () => void;
}
interface Notifications {
  [key: string]: NotificationItem;
  [key: number]: NotificationItem;
}
class NotificationStore {
  @observable notifications: Notifications = {};
  id: number = 1;

  constructor() {
    setInterval(() => {
      this.notifications;
    }, 1000);
  }

  @action
  add(item: NotificationItem) {
    this.notifications[this.id] = item;
    setTimeout(() => {
      this.remove(this.id);
    }, 1000);
    this.id++;
  }
  @action
  remove(id: ID) {
    delete this.notifications[id];
  }
}

interface NotificationProps {
  notificationState: NotificationStore;
}
export const notificationState = new NotificationStore();

@observer
export class Notification extends React.Component<NotificationProps, {}> {
  render() {
    const { notificationState: state } = this.props;
    return (
      <div>
        {Object.keys(state.notifications)
          .filter(id => state.notifications[id])
          .map(id => {
            const { title, message, onPress } = state.notifications[id];
            return (
              <div onClick={onPress}>
                <div>{title}</div>
                <div>{message}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
