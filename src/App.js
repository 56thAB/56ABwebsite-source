// App.js
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store"; // Import your Redux store
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import GuidesPage from "./pages/GuidesPage";
import AboutUsPage from "./pages/AboutUs";
import guidesDB from "./db/guidesDB.json";
import GuideRoute from "./routes/GuidesRoute";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/chat" component={ChatPage} />
            <Route exact path="/guides" component={GuidesPage} />
            <Route exact path="/aboutus" component={AboutUsPage} />
            {guidesDB.map((guide) => (
              <Route
                exact
                key={guide.name}
                path={`/guides/${guide.name.toLowerCase().replace(/\s/g, "")}` }
              >
                <GuideRoute key={guide.name} guide={guide} />{" "}
              </Route>
            ))}
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
