import React from "react";

class WelcomeComponent extends React.Component {
  logout() {
    this.props.history.push("/logout");
  }
  render() {
    return (
      <div>
        <h1 className="welcome">Hello, World!</h1>
        <br />
        <button className="submit_btn logout" onClick={this.logout.bind(this)}>
          Logout
        </button>
      </div>
    );
  }
}
export default WelcomeComponent;
