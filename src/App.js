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
import { Scrollbars } from "react-custom-scrollbars";

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
          <Scrollbars style={{ width: "100%", height: "100vh" }} className="customScrollbar">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/chat" component={ChatPage} />
              {/* Wrap the content that needs a custom scrollbar */}
              <Route exact path="/guides">
                <Scrollbars style={{ width: "100%", height: "100%" }}>
                  <GuidesPage />
                </Scrollbars>
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
          </Scrollbars>
        </Suspense>
      </Router>
    </Provider>
  </div>
  );
}
