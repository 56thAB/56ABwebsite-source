import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store"; // Import your Redux store
import HomePage from "./pages/HomePage";

export default function App() {
  useEffect(() => {
    // document
    //   .getElementById("tabs")
    //   .scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //     inline: "nearest",
    //   });
  });

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}