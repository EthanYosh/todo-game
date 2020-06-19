import "../Login.css";
import React from "react";
import { ReactComponent as Visible } from "../components/loginIcons/eye.svg";
import { ReactComponent as Hidden } from "../components/loginIcons/hidden.svg";
import { ReactComponent as Submit } from "../components/loginIcons/next.svg";
import { ReactComponent as Wrong } from "../components/loginIcons/close.svg";
import { ReactComponent as Right } from "../components/loginIcons/tick.svg";
import { Redirect } from "react-router-dom";

var open = false;
var showPwd = false;

class Login extends React.Component {
  state = {
    redirect: false,
  };

  eyeClick() {
    if (showPwd === true) {
      document.querySelector("#password").setAttribute("type", "password");
      document.querySelector(".openEye").id = "hide";
      document.querySelector(".closedEye").id = "";
    } else {
      document.querySelector("#password").setAttribute("type", "text");
      document.querySelector(".openEye").id = "";
      document.querySelector(".closedEye").id = "hide";
    }
    showPwd = !showPwd;
  }

  arrowClick() {
    if (open) {
      document.documentElement.style.setProperty("--color", "dodgerblue");
      document.documentElement.style.setProperty("--scale", "scaleX(0)");
      document.documentElement.style.setProperty("--opacity", 0);
      document.querySelector(".arrow").id = "";
      document.querySelector(".times").id = "hide";
      document.querySelector(".check").id = "hide";
    } else {
      if (
        document.querySelector("#password").value === "test123" &&
        document.querySelector("#userName").value === "admin"
      ) {
        document.querySelector(".action").dataset.content = "Welcome Back";
        document.documentElement.style.setProperty("--color", "lightseagreen");
        document.querySelector(".check").id = "";
        document.querySelector(".times").id = "hide";
        document.querySelector(".arrow").id = "hide";
        setTimeout(
          function () {
            this.setState({ redirect: true });
          }.bind(this),
          1000
        );
      } else {
        document.querySelector(".action").dataset.content =
          "Invalid User / Pass";
        document.documentElement.style.setProperty("--color", "tomato");
        document.querySelector(".times").id = "";
        document.querySelector(".check").id = "hide";
        document.querySelector(".arrow").id = "hide";
      }
      document.documentElement.style.setProperty("--scale", "scaleX(1)");
      document.documentElement.style.setProperty("--opacity", 1);
    }

    open = !open;
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/Home" />;
    }
    return (
      <span className="loginBody">
        <div className="greeting">
          <h1>Halt! Who goes there??!</h1>
          <br />

          <div className="wrapper2">
            <input type="text" id="userName" placeholder="user" />
          </div>

          <div className="wrapper">
            <input type="password" id="password" placeholder="password" />
            <button className="eye" onClick={this.eyeClick} id="loginButtons">
              <Visible className="openEye" id="hide" />
              <Hidden className="closedEye" id="" />
            </button>
            <button
              id="loginButtons"
              className="action"
              data-content=""
              onClick={() => this.arrowClick()}
            >
              <Submit className="arrow" id="" />
              <Right className="check" id="hide" />
              <Wrong className="times" id="hide" />
            </button>
          </div>

          <br />
          <br />
          <p>
            Don't have an account?{" "}
            <a className="samePara" href="/Register">
              Create one
            </a>
            !
          </p>
        </div>
      </span>
    );
  }
}

export default Login;
