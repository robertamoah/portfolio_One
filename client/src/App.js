import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoMatch from "./pages/nomatch";
import Layout from "./components/layouts/layouts";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
