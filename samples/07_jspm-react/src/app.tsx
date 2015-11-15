import * as React from "react";
import * as ReactDOM  from "react-dom";

interface Item {
  message: string;
}

class HelloComponent extends React.Component<Item, {}> {
  render () {
    return (
      <div>
        <div>Hello React from JSPM</div>
        <div>{this.props.message}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloComponent message="Whoop, whoop!"/>,
  document.getElementById("content")
);
