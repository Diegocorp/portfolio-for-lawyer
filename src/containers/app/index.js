import React, { Fragment, Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePageOne from "../Pages/HomePageOne";
import SingleTeamPage from "../Pages/SingleTeamPage";
import ContactPage from "../Pages/ContactPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <ToastContainer autoClose={2500} position="top-center" />
          <Switch>
            <Route exact path="/" component={HomePageOne} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/team" component={SingleTeamPage} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
