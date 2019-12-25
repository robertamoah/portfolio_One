import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wallpaper1 from "./components/wallpapers/index1";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoMatch from "./pages/nomatch";
import Layout from "./components/layouts/layouts";
import NavBarMain from "./components/navBar/index";
import Jumbotron from "./components/jambotron/index";
import FooterMain from "./components/footer/index";
import Experinces from "./pages/experinces";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <NavBarMain />
      <Jumbotron />
      <Wallpaper1>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/home" component={Dashboard} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/experinces" component={Experinces} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/projects" component={Projects} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </Wallpaper1>
      <FooterMain />
    </React.Fragment>
  );
}

export default App;
