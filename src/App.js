// App.js
import React, {Suspense} from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import GuidesPage from "./pages/GuidesPage";
import AboutUsPage from "./pages/AboutUs";
import ApplyPage from "./pages/ApplyPage";
import Layout from "./components/Layout";
import generatedRoutes from "./routes/GenerateRoutes/GeneratedRoutes";

const GuideComponents = {};

generatedRoutes.forEach((guide) => {
    GuideComponents[guide.name] = React.lazy(() =>
      import(`./pages/GuidesPages/${guide.name}/${guide.name}`)
    );
console.log(GuideComponents)
});
export default function App() {
 
  


  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Layout>Loading...</Layout>}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/chat" component={ChatPage} />
              <Route exact path="/guides">
                  <GuidesPage />
              </Route>
              <Route exact path="/aboutus" component={AboutUsPage} />
              <Route exact path="/apply" component={ApplyPage} />
              {generatedRoutes.map((guide) => (
                <Route
                  exact
                  key={guide.name}
                  path={guide.path}
                  component={GuideComponents[guide.name]}
                />
              ))}
            </Switch>
        </Suspense>
      </Router>
    </Provider>
  </div>
  );
}
