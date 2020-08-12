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
//This merges both actions, rather than doing it twice
    this.setState(prevState => ({ count: prevState.count + 1 }));
    console.log("Printing in console value of count " + this.state.count);
    this.setState(prevState => ({ count: prevState.count + 1 }));
    console.log("Printing in console value of count " + this.state.count);
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
