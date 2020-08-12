import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    console.log("Printing in colsoe value of count " + this.state.count);
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={() => this.increaseCount()}>Increase Count</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

let count = 0;
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App count={count} />
  </React.StrictMode>,
  rootElement
);

56:03