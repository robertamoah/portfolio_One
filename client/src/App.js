import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import DashBoard from "./pages/dashboard/index"


import decode from "jwt-decode";

// import './App.css';

// yarn run dev   *******************************************

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'




function App() {
  return (
<Router>
{/* user interaction after login */}

    <div className="App">

<Switch>
{/* <Route exact  path="/" render = {props => <Login {...props} />}  /> */}
<Route exact path="/dashboard" render = {props => <DashBoard {...props} />}  />
</Switch>   



    </div>
  </Router>

  );
}

export default App;
