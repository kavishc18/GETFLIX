import axios from "axios";

import { useContext, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../Store/UserContext";

import { Nav } from "react-bootstrap";

function LogIn() {
  const testingout = useContext(UserContext);
  console.log(testingout);
  const {setUser} = useContext(UserContext);
  const history = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const userData = {
      username: enteredUsername,
      password: enteredPassword,
    };

    axios
      .post("http://localhost/first_year_group_project_y8/getflix_app/src/php/login.php", userData)
      .then((result) => {
        let response = result.data;
        if (response.status === "valid") {

          // localStorage.setItem("username", response.username);
          // localStorage.setItem("session_id", response.session_id);

          localStorage.setItem("sessionId", response.session_id);

          setUser({
            username: response.username,
            sessionId: response.session_id
          });

          history("/");
        } else {
          alert(response.message);
        }
      })
      .catch(console.error);
  }

  let routerLinkStyle = {
    fontSize: "1.2em",
    verticalAlign: "middle",
    color: "#ffb800",
    textDecoration: "none"
  };

  return (
    <div className="container-fullwidth" style={{ overflow: "none" }}>
      <div className="background" style={{ overflow: "none" }}>
        <div className="form-div" style={{ overflow: "none" }}>
          <div className="form-title">
            <p className="form-title-text">LOG IN</p>
          </div>
          <form className="input-form" onSubmit={submitHandler}>
            <input
              className="input-box"
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              required
              ref={usernameRef}
            ></input>
            <input
              className="input-box"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              required
              ref={passwordRef}
            ></input>
            <input
              type="submit"
              className="primary-button"
              value="Log In"
            ></input>
          </form>
          <div className="switch-form">
            <p className="form-text">Don't have an account?</p>
            <Nav.Link href="/register" className="alt-button">
              <Link style={routerLinkStyle} to="/register" >
                Switch to register
              </Link>
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
