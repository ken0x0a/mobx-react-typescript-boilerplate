import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { NotificationPage } from "./pages/notification-page";
import { Nav } from "./components/nav";
import { TimerPage } from "./pages/timer-page";
import DevTools from "mobx-react-devtools";
import { history } from "./utils/history";
import { AddNotification } from "./components/add-notification";
import { NotificationObjectPage } from "./pages/notification-object-page";

export interface AppProps {}
interface AppState {}

const routes = [
  { path: "/", label: "Home" },
  { path: "/timer", label: "Timer" },
  { path: "/notification", label: "Notification" },
  { path: "/notification-obj", label: "Notification Object" }
];
export class App extends React.Component<AppProps, AppState> {
  public render() {
    return (
      <Router history={history}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <Nav routes={routes} />
            <AddNotification />
          </div>
          <div style={{ flex: 1 }}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              {/* <Route path="/timer" component={TimerPage} /> */}
              <Route path="/notification" component={NotificationPage} />
              <Route
                path="/notification-obj"
                component={NotificationObjectPage}
              />
            </Switch>
          </div>
          <DevTools />
        </div>
      </Router>
    );
  }
}
