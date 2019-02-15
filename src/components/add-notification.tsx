import * as React from "react";
import { notificationState } from "./notification";
import { history } from "../utils/history";

export interface AddNotificationProps {}

export class AddNotification extends React.Component<AddNotificationProps, {}> {
  public render() {
    return (
      <div>
        <div
          onClick={() =>
            notificationState.add({
              title: "title",
              message: "message",
              onPress: () => {
                history.push("/");
              }
            })
          }
        >
          AddNotification!!
        </div>
      </div>
    );
  }
}
