import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

export class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      err: ""
    };
  }
  login(e) {
    e.preventDefault();
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    if (username === "admin" && password === "123") {
      this.props.history.push("./welcome");
    } else {
      this.setState({
        err: "Invalid"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <br />
        <h1>Login</h1>
        <br />
        <form method="post" onSubmit={this.login.bind(this)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={this.handleChange}
          />
          <br />
          <div className="input-feedback">
            <span className="error">
              {this.state.err !== "" ? this.state.err : ""}
            </span>
          </div>

          <br />
          <input type="submit" value="Login" className="submit_btn" />
        </form>
      </div>
    );
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
}
export default LoginComponent;
