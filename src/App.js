import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route excat path="/Rooms" component={Rooms} />
          <Route excat path="/Rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}
