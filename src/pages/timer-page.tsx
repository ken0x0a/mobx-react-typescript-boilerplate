import * as React from "react";
import { TimerView, TimerState } from "../components/timer-view";

export interface TimerPageProps {}
const timerState = new TimerState();

export class TimerPage extends React.Component<TimerPageProps, {}> {
  public render() {
    return (
      <div>
        <TimerView appState={timerState} />
        <div>
          <TimerView appState={timerState} />
        </div>
      </div>
    );
  }
}
