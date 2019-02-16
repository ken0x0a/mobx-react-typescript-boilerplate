import * as React from "react";
import { observable, action, set, get, remove } from "mobx";
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

  constructor() {}

  @action
  add(item: NotificationItem) {
    // set(this.notifications, { [this.id]: item });
    const id = `${this.id}`;
    set(this.notifications, id, item);
    setTimeout(() => {
      this.remove(id);
    }, 10000);
    this.id++;
  }
  @action
  remove(id: string) {
    // delete this.notifications[id];
    remove(this.notifications, id);
    // delete this.notifications[`${id}`];
    // delete this.notifications[`${id}`];
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
              <div key={id}>
                <div onClick={onPress}>
                  <div>{id + title}</div>
                  <div>{message}</div>
                </div>
                <div
                  onClick={() => {
                    state.remove(id);
                  }}
                >
                  remove
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
