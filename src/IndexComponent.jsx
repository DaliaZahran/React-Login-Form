import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles.css";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";

class IndexComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={LoginComponent} />
          <Route exact path="/welcome" component={WelcomeComponent} />
          <Route exact path="/logout" component={LoginComponent} />
        </switch>
      </BrowserRouter>
    );
  }
}
export default IndexComponent;
