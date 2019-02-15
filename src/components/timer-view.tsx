import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

export class TimerState {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}

interface TimerViewProps {
  appState: TimerState;
}
export const appState = new TimerState();

@observer
export class TimerView extends React.Component<TimerViewProps, {}> {
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  };
}
