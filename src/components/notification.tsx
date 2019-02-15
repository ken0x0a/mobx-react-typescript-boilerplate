import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

type ID = string | number;
interface NotificationItem {
  title: string;
  message: string;
  onPress: () => void;
}
// interface Notifications {
//   [key: string]: NotificationItem;
//   [key: number]: NotificationItem;
// }
class NotificationStore {
  @observable notifications: NotificationItem[] = [];
  id: number = 1;

  constructor() {
    setInterval(() => {
      this.notifications;
    }, 5000);
  }

  @action
  add(item: NotificationItem) {
    this.notifications.unshift({ ...item, title: `${this.id}${item.title}` });
    setTimeout(() => {
      this.notifications.pop();
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
        {state.notifications.map(({ title, message, onPress }) => (
          <div onClick={onPress}>
            <div>{title}</div>
            <div>{message}</div>
          </div>
        ))}
      </div>
    );
  }
}
